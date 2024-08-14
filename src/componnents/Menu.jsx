import FbIcon from "../../public/facebook.png";
import TwIcon from "../../public/twitter.png";
import IgIcon from "../../public/instagram.png";
import TkIcon from "../../public/tiktok.png";

const Menu = () => {
  return (
    <ul className="pt-4 flex flex-col gap-2 justify-center items-start">
      <li className="menuItem">快速導覽</li>
      <li className="menuItem">
        <a href="https://www.facebook.com/doban.media">
          <img src={FbIcon} className="h-[20px] w-[20px]" alt="facebookLogo" />
        </a>
      </li>
      <li className="menuItem">
        <a href="https://x.com/DobanMedia">
          <img src={TwIcon} className="h-[20px] w-[20px]" alt="twitterLogo" />
        </a>
      </li>
      <li className="menuItem">
        <a href="https://www.instagram.com/dobanmedia/reels/">
          <img src={IgIcon} className="h-[20px] w-[20px]" alt="instagramLogo" />
        </a>
      </li>
      <li className="menuItem">
        <a href="https://www.tiktok.com/@doban.short?lang=zh-Hant-TW">
          <img src={TkIcon} className="h-[20px] w-[20px]" alt="tiktokLogo" />
        </a>
      </li>
      <li className="menuItem">新聞資料</li>
      <li className="menuItem">作品展示</li>
      <li className="menuItem">收費項目</li>
      <li className="menuItem">活動紀錄</li>
    </ul>
  );
};
export default Menu;
