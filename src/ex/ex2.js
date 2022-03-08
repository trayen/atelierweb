

import React from 'react';

class Ex2 extends React.Component {
  submit = () => {
    var prix_HT;
var TVA;
var prix_TTC;
TVA= 18.6;
prix_HT= prompt("donner prix hors tax")
prix_TTC=prix_HT+(prix_HT*TVA/100)

alert("le prix est :"+prix_TTC+"DT")
   
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex2</button>
      </div>
    );
  }
}

export default Ex2;
