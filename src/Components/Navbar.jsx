import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  const {dataState, dataDispatch} = useGlobalContext()
  const navigate = useNavigate()

  const changeTheme=()=>{
    dataDispatch({type: 'CHANGE_THEME', payload: !dataState.theme})
  }
  return (
    <nav className={dataState.theme ? "navbar" : "dark"}>
      <div id="nav" className="flex justify-between items-center gap-4 w-full m-0">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* <link to="/"  */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <div className="navigate">
          <button className="buttonNav" onClick={() => navigate(-1)}>
            {" "}
            <ArrowLeftOutlined />
          </button>
          <button className="buttonNav" onClick={() => navigate(1)}>
            <ArrowRightOutlined />
          </button>
          <img src="/images/DH.png" alt="DH-logo" />
        </div>

        <div className={`link ${isOpen && "open"}`}>
          <Link to="/home" onClick={() => setIsOpen(!isOpen)}>
            {" "}
            <h3>Home</h3>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
            {" "}
            <h3>Contact</h3>
          </Link>
          <Link to="/favs" onClick={() => setIsOpen(!isOpen)}>
            {" "}
            <h3>Favs</h3>
          </Link>
        </div>

        <div className="navToggle">
          <div
            className={`hamburg ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <img src="/images/DH.png" alt="DH-logo" />
          </div>
        </div>

        <button
          onClick={changeTheme}
          className="mr-4 text-lg bg-white rounded-xl p-2 m-1"
        >
          {dataState.theme ? "Dark theme" : "Light theme"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar