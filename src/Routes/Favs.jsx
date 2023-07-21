import { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  
  // eslint-disable-next-line no-lone-blocks
  {/* este componente debe consumir los destacados del localStorage */}  
  const {dataState, dataDispatch}=useGlobalContext()
  useEffect(() =>{
    console.log("Local Favs",dataState.favs)
    dataDispatch({type:'ADD_FAV', payload: dataState.favs})   
    dataState.favs = JSON.parse(localStorage.getItem("favs"));    
    
    },[dataState]) 
    
  return (
    <>
      <div className={dataState.theme ? 'light':'dark'}>
            <h1>Dentists Favs</h1>
            {/* Deberan renderizar una Card por cada uno de ellos */}
            <div className="card-grid">
              {dataState.favs.map(fav => <div key = {fav.id}>                   
                <Card name={fav.name} username={fav.username} id={fav.id} toogle={fav.toggle}/>             
              </div> )}
            </div>        
      </div>
    </>
  )
}

export default Favs;
