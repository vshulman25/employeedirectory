import EmployeeInfo from '../EmployeeInfo/index'
import React from 'react'

function EmployeeTable({ headings, employees, sortEmployees }) {
    return (
        <div>
            <table className="employeeTable">
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        sortEmployees(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}


                    </tr>
                </thead>

                < EmployeeInfo
                    employees={employees} />


            </table>
        </div>
    )
}


export default EmployeeTable;