import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Slides = () => {
  const screenSize = useSceenSize();
  const [count, setCount] = useState(0);
  const [slideShow, setSlideShow] = useState([]);

  // const slides = [
  // 	{ url: "/slide0.jpg", des: "slide0" },
  // 	{ url: "/slide1.jpg", des: "slide1" },
  // 	{ url: "/slide2.jpg", des: "slide2" },
  // 	{ url: "/slide3.jpg", des: "slide3" },
  // 	{ url: "/slide4.jpg", des: "slide4" },
  // 	{ url: "/slide5.jpg", des: "slide5" },
  // 	{ url: "/slide6.jpg", des: "slide6" },
  // 	{ url: "/slide7.jpg", des: "slide7" },
  // 	{ url: "/slide8.jpg", des: "slide8" },
  // 	{ url: "/slide9.jpg", des: "slide9" },
  // ];

  // const slides = [
  // 	{ url: "/hero1.jpg", des: "slide0" },
  // 	{ url: "/hero2.jpg", des: "slide1" },
  // 	{ url: "/hero3.jpg", des: "slide2" },
  // ];

  const heroimg = [{ url: "/hero.png", des: "hero" }];

  const calIndex = (index, level) => {
    const newIndex =
      index + level > slides.length - 1
        ? index + level - slides.length
        : index + level;
    return newIndex;
  };

  const handlePrev = () => {
    const newIndex = count - 1 < 0 ? slides.length - 1 : count - 1;
    setCount(newIndex);
  };

  const handleNext = () => {
    const newIndex = count + 1 >= slides.length ? 0 : count + 1;
    setCount(newIndex);
  };

  const buttonSection = [
    <div className="w-full p-4 flex justify-between items-center absolute top-1/2 left-0 opacity-50">
      <CgChevronLeft
        size={60}
        className="cursor-pointer aniFadeIn"
        onClick={handlePrev}
      />
      <CgChevronRight
        size={60}
        className="cursor-pointer aniFadeIn"
        onClick={handleNext}
      />
    </div>,
  ];

  // useEffect(() => {
  // 	if (screenSize.imgNum == 3) {
  // 		setSlideShow([
  // 			<div className="w-1/3">
  // 				<img src={slides[count].url} alt={slides[count].des} />
  // 			</div>,
  // 			<div className="w-1/3">
  // 				<img
  // 					src={slides[calIndex(count, 1)].url}
  // 					alt={slides[calIndex(count, 1)].des}
  // 				/>
  // 			</div>,
  // 			<div className="w-1/3">
  // 				<img
  // 					src={slides[calIndex(count, 2)].url}
  // 					alt={slides[calIndex(count, 2)].des}
  // 				/>
  // 			</div>,
  // 			buttonSection,
  // 		]);
  // 	} else if (screenSize.imgNum == 2) {
  // 		setSlideShow([
  // 			<div className="w-1/2">
  // 				<img src={slides[count].url} alt={slides[count].des} />
  // 			</div>,
  // 			<div className="w-1/2">
  // 				<img
  // 					src={slides[calIndex(count, 1)].url}
  // 					alt={slides[calIndex(count, 1)].des}
  // 				/>
  // 			</div>,
  // 			buttonSection,
  // 		]);
  // 	} else {
  // 		setSlideShow([
  // 			<div className="w-full">
  // 				<img src={slides[count].url} alt={slides[count].des} />
  // 			</div>,
  // 			buttonSection,
  // 		]);
  // 	}
  // }, [screenSize, count]);

  return (
    <div
      className="
      w-full
      mx-auto
      mb-4
      lg:max-w-[1200px]
      "
    >
      <div
        className="
        max-w-full
        mx-2
        rounded-lg
        overflow-x-hidden
        flex
        justify-start
        items-center
        gap-1
        relative
				shadow-xl
        "
      >
        <img
          src={heroimg[0].url}
          alt={heroimg[0].des}
          // className="h-[450px] overflow-x-hidden"
        />
      </div>
    </div>
  );
};

export default Slides;
