import React from "react";
import Nav from "../componnents/Nav";
import Spring from "../componnents/Spring";

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
        <Spring />
      </div>
    </>
  );
};

export default Animation;
