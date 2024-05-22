import React from "react";

const Nav = () => {
  return (
    <>
      <div className="w-full bg-slate-700 text-white mb-2">
        <div
          className="
          bg-slate-600 
          max-w-[1200px] 
          h-[60px] 
          mx-[calc((100vw-1184px)*0.5)] 
          flex 
          justify-center 
          items-center
        ">
          <div className="px-2">I am low1</div>
          <div className="px-2">I am low2</div>
          <div className="px-2">I am low3</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
