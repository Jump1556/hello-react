import React from 'react';
import ReactDOM from 'react-dom';

// style via var. Should change <h1 style = {styles}>
// use camal style for names, if value is number "px" assumed
const styles = {
  background: "lightblue",
  color: "darkred",
  marginTop: 100,
  fontSize: 50
}
//style inline 
//attribute style = {{background: 'lightblue', color: 'darkred'}}
const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);