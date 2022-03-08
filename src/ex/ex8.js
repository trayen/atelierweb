

import React from 'react';

class Ex8 extends React.Component {
  submit = () => {
    var num;
num = parseFloat(prompt("donner nbr"));

var carre=num*num;
if(num !=null){
  alert(carre);
}
else{
  alert("out of service");
}
   
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex8</button>
      </div>
    );
  }
}

export default Ex8;
