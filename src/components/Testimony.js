import React from "react";
import '../style-sheets/Testimony.css';  //importamos el estilo del componente Testimonio

//export function Testimonio() {  --> exportación nombrada en app.js
function Testimony(props) {
  return(
    <div className='container-testimony'>
      <img
        className="images-testimony"
        src={require(`../images/testimony-${props.image}.png`)}
        alt="Foto de Emma"/>
      <div className='container-text-testimony'>
        <p className="name-testimony"><strong>{props.name}</strong> en {props.country}</p>
        <p className="charge-testimony">{props.charge}en<strong>{props.company}</strong></p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}


export default Testimony;  //Exportamos testimonio por defecto en App.js