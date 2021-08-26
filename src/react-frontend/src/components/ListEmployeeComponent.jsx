import React, { Component } from 'react';

import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            employee: []

        }

        this.addEmployee =this.addEmployee.bind(this); 
        this.editEmployee =this.editEmployee.bind(this); 
        this.deleteEmployee =this.deleteEmployee.bind(this);
        this.viewEmployee =this.viewEmployee.bind(this);
    }

    deleteEmployee(id){
        // rest api
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employee: this.state.employee.filter(employee => employee.id !==id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`); 
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);  
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) =>{

            this.setState({employee: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                
                <h2 className="text-center">Employee List</h2>
                <div className = "">
                   
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                   
                </div>
                <br></br>
                <div className="row">
                    <table className ="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                    <tr key ={employee.id}>
                                        <td>{employee.firstname}</td>
                                        <td>{employee.lastname}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button onClick={() => this.editEmployee(employee.id)} 
                                                                         className="btn btn-info">Update</button>

                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)} 
                                                                        className="btn btn-danger">Delete</button>

                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)} 
                                                                        className="btn btn-info">View</button>
                                        </td>

                                    </tr>
                                )

                            }
                        </tbody>
                    </table>


                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;