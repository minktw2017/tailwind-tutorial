import React from 'react'
import Nav from '../componnents/Nav'

const Animation = () => {
  return (
    <>
      <Nav />
      <div className='w-[1200px] mx-auto'>
        <img
          className='aniFadeIn w-[400px]'
          src="slide2.jpg"
          alt="slide2"
        />
      </div>
    </>
  )
}

export default Animation