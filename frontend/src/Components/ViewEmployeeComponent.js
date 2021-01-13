import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService'
import logo from './insert-image-here.jpg'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {},
        }

        
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center" style={{marginTop: "10px"}}> View Employee Details</h3>
                    <div className = "card-body d-flex">
                        <div className = "card-body-left">
                            <div>
                                <label> Employee First Name: </label>
                                <div> { this.state.employee.firstName }</div>
                            </div>
                            <div>
                                <label> Employee Last Name: </label>
                                <div> { this.state.employee.lastName }</div>
                            </div>
                            <div>
                                <label> Employee Email ID: </label>
                                <div> { this.state.employee.emailId }</div>
                            </div>

                        </div>

                        <div className="card" style={{marginRight: "30px", marginLeft: "30px"}}></div>

                        <div className="card-body-center">
                            <div className="justify-content-end">
                                <label> On Duty: </label>
                                <div> {String(this.state.employee.isClockedIn)}</div>
                            </div>
                            <div>
                                <label> Last Clocked In: </label>
                                <div> { this.state.employee.lastClockedIn }</div>
                            </div>
                            <div>
                                <label> Last Clocked Out: </label>
                                <div> { this.state.employee.lastClockedOut }</div>
                            </div>
                        </div>
                        <div className="card" style={{marginRight: "30px", marginLeft: "30px"}}></div>

                        <div className="card-body-right">
                            <img src={logo} alt="Logo" />
                        </div>
                        
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent