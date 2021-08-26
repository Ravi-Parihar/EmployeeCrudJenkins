
import React, { Component } from 'react';

import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            //step 2
            id: this.props.match.params.id,
            firstname: '',
            lastname: '',
            email: '',
        }
        this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler= this.changeLastNameHandler.bind(this);
        this.changeEmailHandler= this.changeEmailHandler.bind(this);
        this.saveOrUpdateEmployee= this.saveOrUpdateEmployee.bind(this);
    }
    //step 3
    componentDidMount(){

        //step 4
        if(this.state.id === '_add'){
            return
        }
        else{
            EmployeeService.getEmployeeById(this.state.id).then((res) =>{
                let employee= res.data;
                this.setState({firstname: employee.firstname,
                                lastname: employee.lastname,
                                email: employee.email
                });
            });
        }

    }

    saveOrUpdateEmployee = (e) =>{
        e.preventDefault();
        let employee={firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));

        //step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employee');
            });
        }
        else{
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employee');
            });
        }

    }

    changeFirstNameHandler =(event) => {
        this.setState({firstname: event.target.value});
    }

    changeLastNameHandler =(event) => {
        this.setState({lastname: event.target.value});
    }

    changeEmailHandler =(event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/employee');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h2 className="text-center">Add Employee</h2>
        }
        else{
            return <h2 className="text-center">Update Employee</h2>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className ="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"></h3>
                            <div className="card-body">
                                <form>
                                {/*<h2 className="text-center">Add Employee</h2>*/}
                                    {
                                        this.getTitle()
                                    }
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstname" className="form-control"
                                                value={this.state.firstname} onChange={this.changeFirstNameHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastname" className="form-control"
                                                value={this.state.lastname} onChange={this.changeLastNameHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeEmailHandler}/>

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;