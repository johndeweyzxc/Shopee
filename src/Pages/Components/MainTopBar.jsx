import React from "react";
import {IconButton} from "@mui/material";
import {Search, ShoppingCart} from "@mui/icons-material";

export default function MainTopBar() {
  return (
    <header className='w-full bg-primaryColor p-4 pl-6 pr-6 flex'>
      <h1 className='text-3xl text-white font-Poppins mr-8 self-center'>
        Shopee
      </h1>
      <div className='flex bg-white p-2 rounded-full w-full'>
        <input
          placeholder='Sign up and get 100% off on your first order'
          className='text-base text-textColor font-Roboto outline-none pl-2 pr-2 w-full
                placeholder:font-Roboto placeholder:text-sm'
        />
        <IconButton sx={{padding: 0}}>
          <Search />
        </IconButton>
      </div>
      <div className='w-full flex items-center ml-4 font-OpenSans text-white text-sm'>
        <a className='p-2 cursor-pointer mr-[1px]' href='/sellonshopee'>
          Sell on Shopee
        </a>
        <a className='p-2 cursor-pointer mr-[1px]' href='/sellercenter'>
          Seller Center
        </a>
        <a className='p-2 cursor-pointer mr-[1px]' href='/download'>
          Download
        </a>
        <a className='p-2 cursor-pointer mr-[1px]' href='/help'>
          Help
        </a>
      </div>
      <div className='flex font-Poppins'>
        <div className='self-center mr-8 cursor-pointer'>
          <ShoppingCart sx={{color: "#FFFF"}} />
        </div>
        <a
          className='text-white text-lg p-2 cursor-pointer mr-4'
          href='/register'
        >
          Register
        </a>
        <a className='text-white text-lg p-2 cursor-pointer mr-4' href='/login'>
          Login
        </a>
      </div>
    </header>
  );
}
