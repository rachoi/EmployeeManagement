import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ClockInOrOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            lastClockedIn: '',
            lastClockedOut: '',
            isClockedIn: '',
            input: ''
            
        }

        this.clock = this.clock.bind(this);
        this.updateInput = this.updateInput.bind(this);

    }

    componentDidMount()
    {
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.emailId,
                lastClockedIn : employee.lastClockedIn,
                lastClockedOut : employee.lastClockedOut,
                isClockedIn : employee.isClockedIn
            });
        });
    }        
    
    cancel(){
        this.props.history.push('/employees');
    }

    clock = (e) => {
        e.preventDefault();
        let today = new Date();
        let currentDateTime = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); 
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId, 
            lastClockedIn: this.state.lastClockedIn, 
            lastClockedOut: this.state.lastClockedOut,
            isClockedIn : this.state.isClockedIn,
        };


        console.log('employee => ' + JSON.stringify(employee));
        
        if(this.state.id === this.state.input)
        {
            if(this.state.isClockedIn) {
                employee.isClockedIn = false;
                employee.lastClockedOut = currentDateTime;
            }
            else{
                employee.isClockedIn = true;
                employee.lastClockedIn = currentDateTime;
            }

            console.log('employee => ' + JSON.stringify(employee));

            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
        else{
            console.log("Employee ID does not match")
            this.props.history.push('/employees');
        }
    }



    updateInput = (event) => {
        this.setState({input: event.target.value});
    }

    render() {
        return (
            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "10px"}}>
                <h2 className="text-center">Clock System</h2>
                <div className = "card-body">
                    <form>
                        <div className = "form-group">
                            <label> Enter Employee ID: </label>
                            <input placeholder="Employee ID" name="Employee-ID" className="form-control" 
                                onChange={this.updateInput} 
                            />
                        </div>
                        <button className="btn btn-success" disabled={this.state.input.length === 0} onClick={this.clock} style={{marginTop: "10px"} }>Submit</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px", marginTop: "10px"}}>Cancel</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default ClockInOrOut;