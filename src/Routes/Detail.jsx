import React, { useEffect } from 'react'
import { useGlobalContext } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dataState,dataDispatch} = useGlobalContext()

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  // console.log(params.id)
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => dataDispatch({type:'GET_DENTIST',payload: data}))
    .catch((err) => console.log(err))
  },[])

  console.log(dataState.dentist);

  return (
    <>    
      <h1>Detail to dentist ID: {dataState.dentist.id} </h1>
      <div className='card-grid'>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

          <div className="detailCard">         
              <img src='/images/doctor.jpg' alt="doctor" style={{display:'block', borderRadius: '100px',width:'250px'}} />
              <div style={{display:'grid'}}>
                  <h3>Name: {dataState.dentist.name}</h3>
                  <h4>Email: {dataState.dentist.email}</h4>
                  <h4>Phone: {dataState.dentist.phone}</h4>
                  <h4>Website: {dataState.dentist.website}</h4>
              </div>
              
          </div>          
      </div>     
      
      

    </>
  )
}

export default Detail