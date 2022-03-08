
import "../../src/style.css";
import React from 'react';

class Ex5 extends React.Component {
  submit = () => {
    var jours;
    var moins;
    var annes;
    
    jours=prompt("donner nbr de jours");
    
    annes = Math.floor(jours/360);
    moins=Math.floor(jours%360)/30;
    jours=(jours%360)%60;
    
    alert(annes+"ans" + moins+"moins"+ jours+"jours")
    
    
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex5</button>
      </div>
    );
  }
}

export default Ex5;
