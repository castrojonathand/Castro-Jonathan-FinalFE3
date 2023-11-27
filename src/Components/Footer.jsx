import React from 'react'
import { useGlobalContext } from './utils/global.context'

const Footer = () => {
  const {dataState}= useGlobalContext()
  return (
    <footer className={dataState.theme ? "light" : "dark"}>
      <div className="flex justify-center text-center p-4 bg-primary">
        <p className='pt-0.5'>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" />
      </div>
    </footer>
  );
}

export default Footer
