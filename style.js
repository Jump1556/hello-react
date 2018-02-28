import React from 'react';
import ReactDOM from 'react-dom';

// style via var. Should change <h1 style = {styles}>
const styles = {
  background: "lightblue",
  color: "darkred"
}
//style inline
const styleMe = <h1 style={{background: 'lightblue', color: 'darkred'}}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);