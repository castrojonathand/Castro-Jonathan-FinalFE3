import { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {dataState,dataDispatch} = useContextGlobal()
  // eslint-disable-next-line no-lone-blocks
  {/* este componente debe consumir los destacados del localStorage */}
  
  console.log(dataState.favs+" esto es favs de dataState");
  useEffect(() =>{
    const localFavs = JSON.parse(localStorage.getItem("favs")) || []
    console.log(localFavs);
    dataDispatch({type:'ADD_FAV', payload: localFavs})
    
    },[dataState.favs]) 
    
  return (
    <>
      <div className={dataState.theme ? 'light':'dark'}>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
              {dataState.favs.map(fav => <div key = {fav.id}>   
                
              {/* Deberan renderizar una Card por cada uno de ellos */}

                <Card name={fav.name} username={fav.username} id={fav.id}/>
              
              
              </div> )}
            </div>
        
      </div>
    
    </>
  )
}

export default Favs;
