import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* <link to="/"  */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <button onClick={()=> navigate(-1)}>Volver atras</button>
      <Link to="/home"> <h4>Home</h4></Link>
      <Link to="/contact"> <h4>Contact</h4></Link>
      <Link to="/favs"> <h4>Favs</h4></Link>
      
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar