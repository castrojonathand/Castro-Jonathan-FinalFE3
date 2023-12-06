import React, { useState } from "react";


const Form = () => {
  
  const [state ,setState] = useState({
    nombre: '',
    email:'', 
    message: '',
    error: false   
  })
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(state.email);
    const nombreHasNoNumbers = /^[^\d]+$/.test(state.nombre);

    if (state.nombre.length >= 3 && emailValid && nombreHasNoNumbers) {
      setState({
        ...state,
        message: "Gracias por registrarse",
        error: false,
      });
    } else {
      setState({
        ...state,
        message: "Por favor verifique la información del formulario",
        error: true,
      });
    }
  };

  return (
    <div className="m-4 p-4">
      <form onSubmit={handleSubmit}>        
        <span>Condiciones:</span>
        <ul className="m-4 text-start">
          <li>* nombre: mayor a 3 caracteres</li>
          <li>* mail: con @ y .com</li>
        </ul>      
        <label> Name: </label>
        <input
          className="p-1 border border-gray-700 rounded-md w-full focus:outline-none focus:ring-2 text-black"
          type="text"
          onBlur={(e) => setState({ ...state, nombre: e.target.value })}
        />
        <br />
        <label> Email: </label>
        <input
          className="p-1 border border-gray-700 rounded-md w-full focus:outline-none focus:ring-2 text-black"
          type="mail"
          onBlur={(e) => setState({ ...state, email: e.target.value })}
        />
        <br />

        <button className="bg-primary w-1/3 mx-auto rounded-md my-2">Enviar</button>
        {state.error && <p className="text-red-500">{state.message}</p>}
        {!state.error && <p className="text-green-500">{state.message}</p>}
      </form>
    </div>
  );
}
export default Form
