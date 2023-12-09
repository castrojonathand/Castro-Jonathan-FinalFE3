import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context'
import Me from './Me';
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  const {dataState, dataDispatch} = useGlobalContext()
  // const navigate = useNavigate()

  const changeTheme=()=>{
    dataDispatch({type: 'CHANGE_THEME', payload: !dataState.theme})
  }
  return (
    <nav>
      <div
        id="nav"
        className="flex justify-between items-center gap-4 w-full p-1 mr-2"
      >
        <div className="navigate">
          {/* <button className="buttonNav" onClick={() => navigate(-1)}>
            <ArrowLeftOutlined />
          </button>
          <button className="buttonNav" onClick={() => navigate(1)}>
            <ArrowRightOutlined />
          </button> */}
          <Me />
          <div className="flex mx-4 gap-4">
            <a
              href="https://github.com/johnydeev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-12 h-12 bg-white rounded-full"
                src="/images/github-mark.png"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-castro-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-12 h-12 bg-white rounded"
                src="/images/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        <div
          className={`link ${
            isOpen ? "open" : "close"
          } text-center hover:text-white`}
        >
          <Link to="/home" onClick={() => setIsOpen(!isOpen)}>
            <h3>
              Home
              {/* <span
                className={`absolute inset-x-0 scale-x-0 bottom-0 h-0.5 bg-white w-full transform origin-left transition hover:duration-300 hover:scale-125`}
              ></span> */}
            </h3>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="">Contact</h3>
          </Link>
          <Link to="/favs" onClick={() => setIsOpen(!isOpen)}>
            <h3 className="">Favs</h3>
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
            <Me />
          </div>
        </div>

        <button
          id="theme"
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