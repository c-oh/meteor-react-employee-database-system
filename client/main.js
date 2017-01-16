import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list';


const App = () => {
    return (
     <div>  
     <EmployeeList />
     </div>
    );
};



//After meteor loads, render the act to DOM
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container') )
});