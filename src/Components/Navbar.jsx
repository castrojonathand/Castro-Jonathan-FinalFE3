import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Me from './Me';

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  const {dataState, dataDispatch} = useGlobalContext()
  const navigate = useNavigate()

  const changeTheme=()=>{
    dataDispatch({type: 'CHANGE_THEME', payload: !dataState.theme})
  }
  return (
    <nav>
      <div
        id="nav"
        className="flex justify-between items-center gap-4 w-full m-0"
      >
        <div className="navigate">
          <button className="buttonNav" onClick={() => navigate(-1)}>
            <ArrowLeftOutlined />
          </button>
          <button className="buttonNav" onClick={() => navigate(1)}>
            <ArrowRightOutlined />
          </button>
          <Me/>
        </div>

        <div className={`link ${isOpen ? "open" : "close"} text-center`}>
          <Link to="/home" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="relative inline-block cursor-pointer">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black w-full transform origin-left transition-all duration-500 scale-x-0"></span>
            </h3>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="border-b-2">Contact</h3>
          </Link>
          <Link to="/favs" onClick={() => setIsOpen(!isOpen)}>
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
          <div className="flex justify-between gap-2">
            <Me/>
            {/* <img className="h-10 w-14" src="/images/linkedin-ico.png" alt="" /> */}
          </div>
        </div>

        <button
          onClick={changeTheme}
          className="mr-4 text-lg bg-white rounded-xl p-2 m-1"
        >
          {dataState.theme ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar