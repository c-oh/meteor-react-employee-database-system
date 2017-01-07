import React from 'react';
import ReactDOM from 'react-dom';




const App = () => {
    return (
     <div>  It works!</div>
    );
};



//After meteor loads, render the act to DOM
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container') )
});