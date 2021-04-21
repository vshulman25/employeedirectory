import React from "react";
// import "./style.css";

function EmployeeInfo(props) {
    return (
        <div>
            <tr>

                <td>{props.pic}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.location}</td>

            </tr>
        </div>
    );
}

export default EmployeeInfo;
