import React from 'react'
import { useGlobalContext } from './utils/global.context'
import Me from './Me';

const Footer = () => {
  const {dataState}= useGlobalContext()
  return (
    <footer className={dataState.theme ? "" : "dark"}>
      <div className="flex justify-center p-4 bg-primary">
        <p className='pt-0.5'>Powered by</p>
        <Me/>
      </div>
    </footer>
  );
}

export default Footer
