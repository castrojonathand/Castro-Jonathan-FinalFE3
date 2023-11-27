import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [state ,setState] = useState({
    nombre: '',
    email:'', 
    message: '',
    error: false   
  })
  const handleSubmit = (e) => {
    e.preventDefault()    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emailValid = emailRegex.test(state.email)
    
    if(state.nombre.length >=3 && emailValid) {

      setState({...state,message: "Gracias por registrarse", error: false}) 
      
    }else{      
      setState({...state,message: 'por favor verifique la informacion', error: true})     
      
    }
  }
  return (
    <div className="m-4 p-4">
      <form onSubmit={handleSubmit}>
        {/* <p style={{margin:'5px'}}>validacion: </p> */}
        <span>Condiciones:</span>
        <ul className="m-4 text-start">
          <li>* nombre: mayor a 3 caracteres</li>
          <li>* mail: con @ y .com</li>
        </ul>
        {/* <p className="m-4 text-center">          
          nombre: mayor a 3 caracteres
        </p>
        <p className="m-4 text-center">          
          mail: con @ y .com
        </p> */}
        <label> Nombre: </label>
        <input
          className="border border-gray-700 rounded-md w-full focus:outline-none focus:ring-2"
          type="text"
          onBlur={(e) => setState({ ...state, nombre: e.target.value })}
        />
        <br />
        <label> Email: </label>
        <input
          className="border border-gray-700 rounded-md w-full focus:outline-none focus:ring-2"
          type="mail"
          onBlur={(e) => setState({ ...state, email: e.target.value })}
        />
        <br />

        <button className="button">Enviar</button>
        {state.error && <p style={{ color: "red" }}>{state.message}</p>}
        {!state.error && <p style={{ color: "green" }}>{state.message}</p>}
      </form>
    </div>
  );
}
export default Form
