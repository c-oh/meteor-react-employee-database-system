import React from 'react';
import {Employees} from '../../imports/collections/employees';
import {EmployeeDetail} from './employee_detail';
import {createContainer} from 'meteor/react-meteor-data';


const EmployeeList = (props) =>{
    //props.employees => an array of employee objects


    return(
        <div>
        <div className="employee-list">

        </div>
        </div>
    )
}

export default createContainer(() => {

//sets up the subscription of meteor, to return the object and 
Meteor.subscribe('employees');


//whatever is returend will be sent to Employeelist as a prop
//.fetch excecutes the search, and only fetches records we have subscribed to "employees"

return {employees: Employees.find({}).fetch()};


},EmployeeList);