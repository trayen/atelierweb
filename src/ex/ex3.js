
import "../../src/style.css";
import React from 'react';

class Ex3 extends React.Component {
  submit = () => {
    var TEST;
TEST= prompt("donner un choffre entre 0 et 10");
if(TEST>=0&&TEST<=10){
    alert("correct");
}
else{
    alert("try again");
}
    
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex3</button>
      </div>
    );
  }
}

export default Ex3;
