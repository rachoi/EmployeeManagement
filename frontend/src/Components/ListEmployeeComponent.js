import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.clockEmployee = this.clockEmployee.bind(this);
        
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/employees/info/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/employees/config/${id}`);
    }

    clockEmployee(id) {
        this.props.history.push(`user/${id}`);
    }
   

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/employees/config/add');
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button> 
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-bordered table-hover table-sm">

                            <thead>
                                <tr>
                                    <th> Employee First Name  </th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Last Clocked In </th>
                                    <th> Last Clocked Out</th>
                                    <th> On Duty</th>
                                    <th> Actions</th>
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
                                             <td>
                                                 <button className="btn btn-secondary btn-sm" onClick={ () => this.clockEmployee(employee.id)}> Check in </button>
                                                 <button className="btn btn-info btn-sm" style={{marginLeft: "10px"}} onClick={ () => this.editEmployee(employee.id)}>Update </button>
                                                 <button className="btn btn-danger btn-sm" style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} >Delete </button>
                                                 <button className="btn btn-info btn-sm" style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)}>View </button>
                                             </td>
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

export default ListEmployeeComponent