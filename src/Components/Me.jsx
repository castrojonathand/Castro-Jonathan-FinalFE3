import React from 'react'

const Me = () => {
    return (
      <div id='me' className={`flex py-1 first:pt-0 last:pb-0 ml-1 text-xl`}>
        <img
          className="h-14 w-14 rounded-full"
          src="/images/jonathan.jpeg"
          alt="Jonathan Castro"
        />
        <div className="ml-3 overflow-hidden">
          <p className="font-medium">Castro Jonathan</p>
          <p className="truncate">
            castrojonathand@gmail.com
          </p>
        </div>
      </div>
    );
}

export default Me