
import "../../src/style.css";
import React from 'react';

class Ex6 extends React.Component {
  submit = () => {
    var nom ;
    var prenom;
    nom = prompt("donner nom");
    prenom= prompt("donner prenom");
    var carte;
    carte=prompt("donner num de carte ");
    
    if(carte!=null){
        alert("bonjour"+ nom +" "+prenom +"votre carte est :"+carte);
    }
    else{
        alert("try again");
    }
    
    
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.submit}>Ex6</button>
      </div>
    );
  }
}

export default Ex6;
