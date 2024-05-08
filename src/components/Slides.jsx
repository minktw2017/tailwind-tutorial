import React, { useState } from 'react'

const Slides = () => {

  const [count, setConut] = useState(0)

  const slides = [
    {url: "/slide1.jpg", des: "slide1"},
    {url: "/slide2.jpg", des: "slide2"},
    {url: "/slide3.jpg", des: "slide3"},
    {url: "/slide4.jpg", des: "slide4"},
    {url: "/slide5.jpg", des: "slide5"},
  ]

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='max-w-[1200px] mb-4 rounded:xl overflow-hidden flex justify-center items-center gap-1'>
        <div className='w-1/3'><img src={slides[count].url} alt={slides[count].des} /></div>
        <div className='w-1/3'><img src={slides[count+1].url} alt={slides[count].des} /></div>
        <div className='w-1/3'><img src={slides[count+2].url} alt={slides[count].des} /></div>
      </div>
      <div className='w-2/3 btn bg-indigo-900 text-gray-300 mx-auto p-4 flex justify-center items-center rounded-lg hover:bg-indigo-600 hover:text-gray-200'>Click Me</div>
    </div>
  )
}

export default Slides