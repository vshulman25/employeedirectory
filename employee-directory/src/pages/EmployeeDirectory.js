import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header"
import Wrapper from "../components/Wrapper"
import SearchForm from "../components/SearchForm"
import EmployeeTable from "../components/EmployeeTable";

// header, search form, search results, wrapper, table 

class EmployeeDirectory extends Component {
  state = {
    search: "",
    employees: [{}],
    results: [{}],
  };
  headings = [
    { name: "Image", width: "20%" },
    { name: "Name", width: "20%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "20%" }
  ];
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getRandomUser()
      .then((res) => this.setState({ employees: res.data.results }))
      // .catch(err => console.log(err));
  }
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getRandomUser(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.results);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <div>
        <Wrapper style={{ minHeight: "80%" }}>
          <Header />
          <h1 className="text-center">Search By Employee!</h1>
   
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            names={this.state.names}
            results={this.state.results}
          />

          <EmployeeTable employees={this.state.employees} headings={this.headings} />
        </Wrapper>
      </div>
    );
  }
}

export default EmployeeDirectory;