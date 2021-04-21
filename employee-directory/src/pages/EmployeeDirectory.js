import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header"
import Wrapper from "../components/Wrapper"
import SearchForm from "../components/SearchForm"
import EmployeeTable from "../components/EmployeeTable";

// header, search form, search results, wrapper, table 

class EmployeeDirectory extends Component {
  state = {
    order: "descend",
    employees: [{}],
    filteredResults: [{}]
  };
  headings = [
    { name: "Profile Picture", width: "25%" },
    { name: "Name", width: "25%" },
    { name: "Phone", width: "25%" },
    { name: "Email", width: "25%" },
  ];

  componentDidMount() {
    API.getRandomUser()
      .then((res) => this.setState({ employees: res.data.results, filteredResults: res.data.results }))
      // .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const updateValue = event.target.value
    const filterList = this.state.employees.filter(employee => {
      let value = Object.values(employee).join("").toLowerCase()
      return value.indexOf(updateValue.toLowerCase()) !== -1
    })




    this.setState({ filteredResults: filterList });
  };

  sortEmployees = heading => {
    if (this.state.order === "descend") {
      this.setState({ order: "ascend" })
    } else { this.setState({ order: "descend" }) }
    const sortHeadings = (a, b) => {
      if (this.state.order === "ascend"){
      if (a[heading] === undefined) {
        return 1;
      } else if (b[heading] === undefined) {
        return -1;
      }
      else if (heading === "name") {
        return a[heading].first.localeCompare(b[heading].first);
      } else {
        return a[heading] - b[heading];
      }} else { if (a[heading] === undefined) {
        return 1;
      } else if (b[heading] === undefined) {
        return -1;
      }
      else if (heading === "name") {
        return b[heading].first.localeCompare(a[heading].first);
      } else {
        return b[heading] - b[heading];
      }
      
      }
    }
    const sortedEmployees = this.state.filteredResults.sort(sortHeadings)
    this.setState({filteredResults: sortedEmployees})
  }


  render() {
    return (
      <div>
        <Wrapper style={{ minHeight: "80%" }}>
          <Header />
          <h1 className="text-center"> Welcome, lets check out some employees! </h1>
          <p className="text-center"> Use the search bar to look an employee up or select 'Name' to filter alphabetically </p>

          <SearchForm
     
            handleInputChange={this.handleInputChange}

          />
    

          <EmployeeTable employees={this.state.filteredResults} headings={this.headings} sortEmployees={this.sortEmployees}/>
        </Wrapper>
      </div>
    );
  }
}

export default EmployeeDirectory;