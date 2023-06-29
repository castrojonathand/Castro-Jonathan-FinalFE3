import React from 'react'
// import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {dataState}= useContextGlobal()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>         
        {/* Aqui deberias renderizar las cards */}        
        {dataState.listData.map(list => <div key = {list.id}>
          
          <Card name={list.name} username={list.usermane} id={list.id}/>

        </div> )}       

      </div>
    </main>
  )
}
export default Home