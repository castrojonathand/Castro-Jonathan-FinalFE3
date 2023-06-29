import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  

  return (
    <div>
      <form>
        <label> Nombre: </label>
        <input className="input" type="text" />
        <label> Email: </label>
        <input className="input" type="text" />

      </form>
    </div>
  );
};

export default Form;
