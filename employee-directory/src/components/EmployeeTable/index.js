import EmployeeInfo from '../EmployeeInfo/index'
import React from 'react'

function EmployeeTable(props) {
    return (
        <div>
            <table className="employeeTable">

                <tbody>
                    {props.employees.map((employees) => (
                        <EmployeeInfo
                        name={employees.name.first}
                        email={employees.email}
                        pic={employees.picture.medium}
                        location={employees.location}


                        />
                    ))}

                </tbody>
            </table>
        </div>
    )
}


export default EmployeeTable;