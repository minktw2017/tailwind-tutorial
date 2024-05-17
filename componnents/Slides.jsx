import { useState, useEffect } from 'react';
import useSceenSize from '../hooks/useScreenSize';
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Slides = () => {

  const screenSize = useSceenSize();
  const [count, setCount] = useState(0);
  const [slideShow, setSlideShow] = useState([]);

  const slides = [
    { url: '/slide0.jpg', des: "slide0" },
    { url: '/slide1.jpg', des: "slide1" },
    { url: '/slide2.jpg', des: "slide2" },
    { url: '/slide3.jpg', des: "slide3" },
    { url: '/slide4.jpg', des: "slide4" },
    { url: '/slide5.jpg', des: "slide5" },
    { url: '/slide6.jpg', des: "slide6" },
    { url: '/slide7.jpg', des: "slide7" },
    { url: '/slide8.jpg', des: "slide8" },
    { url: '/slide9.jpg', des: "slide9" },
  ];

  const calIndex = (index, level) => {
    const newIndex = (index + level) > slides.length - 1 ? (index + level - slides.length) : (index + level);
    return newIndex;
  };

  const handlePrev = () => {
    const newIndex = count - 1 < 0 ? slides.length - 1 : count - 1;
    setCount(newIndex);
  };

  const handleNext = () => {
    const newIndex = (count + 1) >= slides.length ? 0 : count + 1;
    setCount(newIndex);
  };

  useEffect(() => {
    if (screenSize.imgNum == 3) {
      setSlideShow([
        <div className='w-1/3'><img src={slides[count].url} alt={slides[count].des} /></div>,
        <div className='w-1/3'><img src={slides[calIndex(count, 1)].url} alt={slides[calIndex(count, 1)].des} /></div>,
        <div className='w-1/3'><img src={slides[calIndex(count, 2)].url} alt={slides[calIndex(count, 2)].des} /></div>,
        <div className='w-full p-4 flex justify-between items-center absolute top-1/2 left-0 opacity-50'>
          <CgChevronLeft size={60} className='cursor-pointer custom' onClick={handlePrev} />
          <CgChevronRight size={60} className='cursor-pointer custom' onClick={handleNext} />
        </div>
      ])
    } else if (screenSize.imgNum == 2) {
      setSlideShow([
        <div className='w-1/2'><img src={slides[count].url} alt={slides[count].des} /></div>,
        <div className='w-1/2'><img src={slides[calIndex(count, 1)].url} alt={slides[calIndex(count, 1)].des} /></div>,
        <div className='w-full p-4 flex justify-between items-center absolute top-1/2 left-0 opacity-50'>
          <CgChevronLeft className='cursor-pointer' size={60} color="#fff" onClick={handlePrev} />
          <CgChevronRight className='cursor-pointer' size={60} color="#fff" onClick={handleNext} />
        </div>
      ])
    } else {
      setSlideShow([
        <div className='w-full'><img src={slides[count].url} alt={slides[count].des} /></div>,
        <div className='w-full p-4 flex justify-between items-center absolute top-1/2 left-0 opacity-50'>
          <CgChevronLeft className='cursor-pointer' size={60} color="#fff" onClick={handlePrev} />
          <CgChevronRight className='cursor-pointer' size={60} color="#fff" onClick={handleNext} />
        </div>
      ])
    }
  }, [screenSize, count]);

  return (
    <div className='max-w-[1200px] mx-auto mb-4 px-1'>
      <div className='max-w-[1200px] flex justify-start items-center gap-1 overflow-x-hidden mb-4 rounded-2xl relative'>
        {slideShow}
      </div>
    </div>
  )
};

export default Slides;
