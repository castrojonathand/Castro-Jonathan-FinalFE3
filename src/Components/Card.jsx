// import React, { useEffect } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id, toggle}) => {
  

  console.log("Apenas entra en CARD",toggle)

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
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}   
        <Link to={`/home/dentist/${id}`}>  
          <div >
              <img className="img" src='/images/doctor.jpg' alt="doctor" style={{display:'block'}} />
              <h3>{name}</h3>
              <h4>{username}</h4>
              <h3>ID:{id}</h3>             
              <h3>estado: {toggle}</h3>
          </div>
        </Link>
        <button onClick={()=> AddFav()} className="favButton">
          {toggle ? "Add to favorites" : "Remove from favorites"}   
          </button>        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}          
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}        
    </div>
  );
};
export default Card;
