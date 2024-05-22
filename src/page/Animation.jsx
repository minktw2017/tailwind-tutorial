import React from "react";
import Nav from "../componnents/Nav";

const Animation = () => {
  return (
    <>
      <Nav />
      <div
        className="
        w-full
        h-[calc(100vh-76px)]
        mx-auto
        flex 
        justify-center 
        items-center
        lg:max-w-[1200px]
        ">
        <div className="w-full h-full bg-slate-400 mx-2">123</div>
      </div>
    </>
  );
};

export default Animation;
