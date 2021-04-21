import React from "react";
// import "./style.css";

function EmployeeInfo({employees}) {
                    

      return (
        <tbody>
          {employees[0] !== undefined && employees[0].name !== undefined ? (
            employees.map(({ login, name, picture, phone, email }) => {
              return (
                <tr key={login.uuid}>
                  <td data-th="Profile Picture" className="align-middle">
                    <img
                      src={picture.medium}
                      alt={"profile image for " + name.first + " " + name.last}
                      className="img-responsive"
                    />
                  </td>
                  <td data-th="Name" className="name-cell align-middle">
                    {name.first} {name.last}
                  </td>
                  <td data-th="Phone" className="align-middle">
                    {phone}
                  </td>
                  <td data-th="Email" className="align-middle">
                    <a href={"mailto:" + email} target="__blank">
                      {email}
                    </a>
                  </td>

                </tr>
              );
            })
          ) : (
            <>No employees found</>
          )}
        </tbody>
      );
}

export default EmployeeInfo;
