import { useState, useEffect } from 'react';

const useSceenSize = () => {

  const genImgNum = (width) => {
    let num;
    // if (screenSize.width < 400) {
    //   setImgNum(1);
    // } else if (screenSize.width >= 400 && screenSize.width < 1200) {
    //   setImgNum(2);
    // } else {
    //   setImgNum(3);
    // };
    if (width < 432) {
      num = 1;
    } else if (width >= 432 && width < 1200) {
      num = 2;
    } else {
      num = 3;
    };
    return num
  };

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    imgNum: genImgNum(window.innerWidth)
  })

  // const [imgNum, setImgNum] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        imgNum: genImgNum(window.innerWidth)
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the even listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useSceenSize;