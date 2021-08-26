import axios from "axios";

const EMPLOYEE_API_BASE_URL ="http://employeedotinc.us-east-2.elasticbeanstalk.com/api/v1/employee";

class EmployeeService {

        getEmployee(){
            return axios.get(EMPLOYEE_API_BASE_URL);
        }

        createEmployee(employee){
            return axios.post(EMPLOYEE_API_BASE_URL, employee);
        }

        getEmployeeById(employeeId){
            return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
        }

        updateEmployee(employee,employeeId){
            return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
        }

        deleteEmployee(employeeId){
            return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
        }
}

export default new EmployeeService()