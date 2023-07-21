import React from 'react'
import { useGlobalContext } from './utils/global.context'

const Footer = () => {
  const {dataState}= useGlobalContext()
  return (
    <footer className={dataState.theme ? 'light':'dark'} >
        <p>Powered by</p>
        <img src='/images/DH.png' alt='DH-logo' />
    </footer>
  )
}

export default Footer
