
// import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'
import Card from '../Components/Card'


// import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {  
  
  const {dataState}= useGlobalContext()
  let toggle = true
  const AddFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage   
    
        console.log(toggle," apenas entra en AddFav [CARD]");       
        
        const item = { name, username, id, toggle }  
        
        console.log(item.toggle)

        const favorites = JSON.parse(localStorage.getItem("favs")) || []
        
        const exists = favorites.some((favorite) => favorite.id === id)

        if (!exists) {
              
          favorites.push(item);
          toggle = true     
          
          localStorage.setItem("favs", JSON.stringify(favorites))          
          console.log("favoritos", favorites) ;
          console.log("Elemento agregado a favoritos:", item)
        } else {
          toggle = false 
          const quitFav = favorites.filter(favoritos => favoritos.id !== id)
          console.log("quitFav: ",quitFav)
          localStorage.setItem("favs", JSON.stringify(quitFav))      
          console.log("El elemento se quito de favoritos:", item)
          } 
      }
  return (
    <main className={dataState.theme ? 'light':'dark'}>
      <h1 style={{marginBottom:0}}>Home</h1>
      <h3> (click on the card to see details)</h3>

      <div className='card-grid'>         
        {/* Aqui deberias renderizar las cards */}        
        {dataState.listData.map(list => <div key = {list.id}>                
          <Card name={list.name} username={list.username} id={list.id} toggle={toggle} AddFav={AddFav}/>
        </div> )}       
      </div>
    </main>
  )

}
export default Home