
import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: []

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
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className = "card-body">
                        <div className ="row">
                           <div> <label>Employee First Name:</label>
                             {this.state.employee.firstname}
                           </div>

                        </div>
                        <div className ="row">
                           <div> <label>Employee Last Name:</label>
                             {this.state.employee.lastname}
                           </div>

                        </div>
                        <div className ="row">
                           <div> <label>Employee Email:</label>
                             {this.state.employee.email}
                           </div>

                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;