import React from "react";
import ShopeeHeader from "../../assets/images/shopee-on-white.jpg";

export default function TopBar() {
  return (
    <header className='w-full bg-primaryBgColor p-4 pl-6 pr-6 flex justify-between ml-12 font-Roboto'>
      <img src={ShopeeHeader} />
      <a
        className='text-primaryColor cursor-pointer mr-20 flex justify-center items-center'
        href='/needhelp'
      >
        Need help?
      </a>
    </header>
  );
}
