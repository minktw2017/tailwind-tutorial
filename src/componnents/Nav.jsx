import { useState } from "react";
import Logo from "../../public/logo60.png";
import FbIcon from "../../public/facebook.png";
import TwIcon from "../../public/twitter.png";
import IgIcon from "../../public/instagram.png";
import TkIcon from "../../public/tiktok.png";
import { CgMenu, CgClose } from "react-icons/cg";
import Menu from "./Menu";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <div className="w-full h-[60px] navbg text-white mb-2 sticky top-0 z-40">
        <div
          className="
          w-full
          mx-auto
          mb-4
          lg:max-w-[1200px]"
        >
          <div
            className="
            max-w-full
            h-[60px]
            mx-2
            flex
						flex-row
						gap-4
            justify-between
            items-center
            lg:justify-start
            relative"
          >
            <div>
              <img src={Logo} alt="logo" className="h-[48px] rounded-lg" />
            </div>
            {menuToggle ? (
              <CgClose size={48} className="lg:hidden" onClick={handleMenu} />
            ) : (
              <CgMenu size={48} className="lg:hidden" onClick={handleMenu} />
            )}
            <div className="gap-2 justify-center items-center hidden md:flex">
              <a href="https://www.facebook.com/doban.media">
                <img
                  src={FbIcon}
                  className="h-[48px] w-[48px]"
                  alt="facebookLogo"
                />
              </a>
              <a href="https://x.com/DobanMedia">
                <img
                  src={TwIcon}
                  className="h-[48px] w-[48px]"
                  alt="twitterLogo"
                />
              </a>
              <a href="https://www.instagram.com/dobanmedia/reels/">
                <img
                  src={IgIcon}
                  className="h-[48px] w-[48px]"
                  alt="instagramLogo"
                />
              </a>
              <a href="https://www.tiktok.com/@doban.short?lang=zh-Hant-TW">
                <img
                  src={TkIcon}
                  className="h-[48px] w-[48px]"
                  alt="tiktokLogo"
                />
              </a>
            </div>
            <div className="mx-4 flex-1 flex-row justify-between items-center hidden lg:flex">
              <a href="#">
                <p className="font-bold text-[24px] opacity-75">新聞資料</p>
              </a>
              <a href="#">
                <p className="font-bold text-[24px] opacity-75">作品展示</p>
              </a>
              <a href="#">
                <p className="font-bold text-[24px] opacity-75">收費項目</p>
              </a>
              <a href="#">
                <p className="font-bold text-[24px] opacity-75">活動紀錄</p>
              </a>
            </div>
            <div
              className={
                menuToggle
                  ? "absolute md:hidden left-[-8px] top-[60px] w-[60%] h-[80vh]   text-neutral-100 bg-slate-500 bg-opacity-70 ease-in-out duration-500"
                  : "ease-in-out w-[60%] duration-500 absolute top-[60px] left-[-100%]"
              }
            >
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
