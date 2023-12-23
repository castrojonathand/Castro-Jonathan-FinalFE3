import React from 'react'
// import Me from './Me';

const Footer = () => {  
  return (
    <footer className="mt-4">
      <div className="flex justify-center items-center gap-4 bg-primary">
        <h3 className="pt-0.5">Powered by</h3>
        <a href="https://github.com/johnydeev">
          <img
            className="h-18 w-24"
            src="/images/lienzoNegro.png"
            alt="johnydeev"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer
