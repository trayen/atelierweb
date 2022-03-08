
import "../../src/style.css";
import React from 'react';

class Ex9 extends React.Component {
  submit = () => {
    var num1;
var num2;
var num3;
num1= parseFloat(prompt("donner num"));
num2=  parseFloat(prompt("donner num"));
num3=  parseFloat(prompt("donner num"));

var solution;
solution=(num1+num2+num3)/3;
alert(solution);
    
    
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex9</button>
      </div>
    );
  }
}

export default Ex9;
