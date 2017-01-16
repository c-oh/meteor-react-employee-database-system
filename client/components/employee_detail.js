import React from 'react';

const EmployeeDetail = ({employee}) =>{
    
    const{name, email, phone, avatar} = employee;
    return(
        <div className="thumbnail">
       <img src={avatar} />
       <h2>{name}</h2>
       <ul className = "list-group">
       <li className= "list-group-item"> Email: {email}</li>
           <li className= "list-group-item"> Phone: {phone}</li>
       </ul>
        </div>
)
};

export default EmployeeDetail;