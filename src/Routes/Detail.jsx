import React from 'react'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // const {dataState} = useContextGlobal()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams()
  console.log(params);

  return (
    <>
    
    
      <h1>Detail Dentist ID: {} </h1>


      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}


    </>
  )
}

export default Detail