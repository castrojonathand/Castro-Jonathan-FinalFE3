import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  const {dataState, dataDispatch} = useGlobalContext()
  const navigate = useNavigate()

  const changeTheme=()=>{
    dataDispatch({type: 'CHANGE_THEME', payload: !dataState.theme})
  }
  return (
    <nav className={dataState.theme ? "navbar" : "dark"}>
      <div
        id="nav"
        className="flex justify-between items-center gap-4 w-full m-0"
      >
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

        <div className={`link ${isOpen ? "open" : "close"}`}>
          <Link to="/home" onClick={() => setIsOpen(!isOpen)}>
            {" "}
            <h3 className="border-b-2">Home</h3>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
            {" "}
            <h3 className="border-b-2">Contact</h3>
          </Link>
          <Link to="/favs" onClick={() => setIsOpen(!isOpen)}>
            {" "}
            <h3 className="border-b-2">Favs</h3>
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