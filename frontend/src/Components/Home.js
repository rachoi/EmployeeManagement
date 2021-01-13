import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center" style={{marginTop: "5px"}}>Employees List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Last Clocked In </th>
                                    <th> Last Clocked Out</th>
                                    <th> On Duty </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td> {employee.lastClockedIn} </td>
                                             <td> {employee.lastClockedOut} </td>
                                             <td> {String(employee.isClockedIn)} </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default Home;