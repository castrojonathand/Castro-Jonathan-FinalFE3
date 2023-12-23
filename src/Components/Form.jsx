import React, { useState } from "react";
import { useGlobalContext } from "./utils/global.context";


const Form = () => {

  const { dataState} = useGlobalContext();
  
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
    <div className="mx-auto">
      <form
        className={`p-5 ${dataState.theme ? "" : " bg-gray-500"}`}
        onSubmit={handleSubmit}
      >
        <span>Condiciones:</span>
        <ul className="m-2 py-2 text-start">
          <li>* Nombre: mayor a 3 caracteres</li>
          <li>* Email: con @ y .com</li>
        </ul>
        
        <label className="text-start"> Name: </label>
        <input
          className="border border-gray-700 rounded-md w-full focus:outline-none focus:ring-2 text-black mt-1 block px-3 py-2 bg-white text-sm shadow-sm placeholder-slate-400
    focus:border-sky-500 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-red-500
      focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="text"
          onBlur={(e) => setState({ ...state, nombre: e.target.value })}
        />
        <br />
        <label className="text-start"> Email: </label>
        <input
          className="border border-gray-700 rounded-md w-full focus:outline-none focus:ring-2 text-black mt-1 block px-3 py-2 bg-white text-sm shadow-sm placeholder-slate-400
    focus:border-sky-500 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-red-500
      focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="mail"
          onBlur={(e) => setState({ ...state, email: e.target.value })}
        />
        <br />

        <button
          className={`w-1/3 mx-auto rounded-lg m-2 p-2 bg-primary hover:bg-opacity-70 hover:border-1`}
        >
          Enviar
        </button>
        {state.error && <p className="text-red-500">{state.message}</p>}
        {!state.error && <p className="text-green-500">{state.message}</p>}
      </form>
    </div>
  );
}
export default Form
