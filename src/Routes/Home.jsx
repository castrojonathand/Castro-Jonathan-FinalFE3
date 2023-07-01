
// import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'
// import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {


  let toggle = true
  const {dataState}= useContextGlobal()
  return (
    <main className={dataState.theme ? 'light':'dark'}>
      <h1>Home</h1>
      <div className='card-grid'>         
        {/* Aqui deberias renderizar las cards */}        
        {dataState.listData.map(list => <div key = {list.id}>
                  
          <Card name={list.name} username={list.username} id={list.id} toggle={toggle}/>
          

        </div> )}       

      </div>
    </main>
  )
}
export default Home