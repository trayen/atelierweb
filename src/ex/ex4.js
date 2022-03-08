
import "../../src/style.css";
import React from 'react';

class Ex4 extends React.Component {
  submit = () => {
    var second;
    second = prompt("donner secondes");
    var hours ;
    var minute;
    hours=Math.floor(second/3600);
    minute=Math.floor(second%3600)/60;
    second=(second%3600)%60
    alert(hours+"hours"+ minute+"minute"+second+"seconds")
    
    
    
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex4</button>
      </div>
    );
  }
}

export default Ex4;
