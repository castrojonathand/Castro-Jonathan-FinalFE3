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
      setState({...state,message: 'por favor verifique la informacion del form', error: true})     
      
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>

        {/* <p style={{margin:'5px'}}>validacion: </p> */}
        <p style={{margin:'5px', textAlign:'center'}}> nombre: mayor a 3 caracteres </p>
        <p style={{margin:'5px', textAlign:'center'}}> mail: con @ y .com</p><br />
        <label> Nombre: </label>
        <input className="input" type="text" onBlur={(e)=> setState({...state,nombre: e.target.value})} /><br />
        <label> Email: </label>
        <input className="input" type="mail" onBlur={(e)=> setState({...state,email: e.target.value})} />
        <br />

        <button className="button">Enviar</button>
        {state.error && <p style={{ color: "red" }}>{state.message}</p>}
        {!state.error && <p style={{ color: "green" }}>{state.message}</p>}
        
      </form>
    </div>
  )
}
export default Form
