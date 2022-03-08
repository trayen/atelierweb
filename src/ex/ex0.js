
import "../../src/style.css";
import React from 'react';

class Ex0 extends React.Component {
  submit = () => {
    alert("hello world ")
    //prompt("enter ur age ")
    const an = 2019;
    const messdage = "bonjour";
    alert(messdage);
    alert(an);
    
    
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex0</button>
      </div>
    );
  }
}

export default Ex0;
