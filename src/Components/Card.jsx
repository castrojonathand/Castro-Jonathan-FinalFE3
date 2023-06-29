import React from "react";
import { Link } from "react-router-dom";
// import { useContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage


  }

  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

          <Link to={/detail/+id}>

            <img src='./images/doctor.jpg' alt="doctor" style={{display:'block'}} />
            <h3>{name}</h3>
            <h4>{username}</h4>
            <h3>ID:{id}</h3>

          </Link>


                  
          <button onClick={addFav} className="favButton">Add fav</button>

        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
