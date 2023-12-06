import React from 'react'

const Me = ({theme}) => {
    return (
      <div className={`flex py-1 first:pt-0 last:pb-0 ml-1`}>
        <img
          className="h-10 w-10 rounded-full"
          src="/images/jonathan.jpeg"
          alt="Jonathan Castro"
        />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium">Castro Jonathan</p>
          <p className="text-sm  truncate">
            castrojonathand@gmail.com
          </p>
        </div>
      </div>
    );
}

export default Me