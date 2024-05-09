import { useState } from 'react';
import useSceenSize from '../hooks/useScreenSize';

const Slides = () => {

  const screenSize = useSceenSize();
  const [count, setCount] = useState(0);

  const slides = [
    {url: '/slide1.jpg', des: "slide1"},
    {url: '/slide2.jpg', des: "slide2"},
    {url: '/slide3.jpg', des: "slide3"},
    {url: '/slide4.jpg', des: "slide4"},
    {url: '/slide5.jpg', des: "slide5"},
  ];

  const handleClick = () => {
    console.log(slides.length)
    console.log(window.innerWidth);
  };

  const slideshow = () => {
    const result =[];
    return (
      <></>
    )
  }

  return (
    <div className='max-w-[1200px] mx-auto mb-4 px-1'>
      <div className='max-w-[1500px] flex justify-start items-center gap-1 overflow-x-hidden mb-4 rounded-2xl'>
        {/* <div><img className='max-w-[400px]' src={slides[0].url} alt={slides[0].des} /></div>
        <div><img className='max-w-[400px]' src={slides[1].url} alt={slides[1].des} /></div>
        <div><img className='max-w-[400px]' src={slides[2].url} alt={slides[2].des} /></div>
        <div><img className='max-w-[400px]' src={slides[3].url} alt={slides[3].des} /></div>
        <div><img className='max-w-[400px]' src={slides[4].url} alt={slides[4].des} /></div> */}
        {/* <div className='w-1/3'><img src={slides[count].url} alt={slides[count].des} /></div>
        <div className='w-1/3'><img src={slides[count+1].url} alt={slides[count+1].des} /></div>
        <div className='w-1/3'><img src={slides[count+2].url} alt={slides[count+2].des} /></div> */}
        {slideshow()}
      </div>

      <div className='btn bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded flex justify-center mx-auto mb-4 w-2/3'
        onClick={handleClick}>
        Button</div>

      <div className='w-1/3 border flex justify-start items-center flex-col'>
        <h1>Screen Size Detection with React Hook</h1>
        <p>Width: {screenSize.width}</p>
        <p>Height: {screenSize.height}</p>
        <p>Numbers of image: {screenSize.imgNum}</p>
      </div>
    </div>
  )
};

export default Slides;
