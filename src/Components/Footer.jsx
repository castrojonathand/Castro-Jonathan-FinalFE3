import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {dataState}= useContextGlobal()
  return (
    <footer className={dataState.theme ? 'light':'dark'} >
        <p>Powered by</p>
        <img src='/images/DH.png' alt='DH-logo' />
    </footer>
  )
}

export default Footer
