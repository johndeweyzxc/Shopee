import React from "react";
import {Button, TextField} from "@mui/material";

import ShopeeBig from "./assets/images/shopee-big.jpg";
import GoogleIcon from "./assets/images/google-icon.png";
import FacebookIcon from "./assets/images/facebook-icon.png";

import {TopAppBar, BottomBar} from "./Login";

function AppBody() {
  return (
    <div className='w-full bg-primaryColor flex pt-16 pb-16 justify-center'>
      <div className='flex flex-col justify-center mr-16 ml-16'>
        <img src={ShopeeBig} className='h-60 self-center mb-8' />
        <h2 className='text-white text-3xl text-Poppins text-center mb-4'>
          The leading online shopping platform
        </h2>
        <h2 className='text-white text-3xl text-Poppins text-center'>
          in Southeast Asia and Taiwan
        </h2>
      </div>

      <div className='rounded-md bg-white p-8 mr-16 ml-16'>
        <h2 className='mb-6 text-xl font-Poppins tracking-wide font-semibold'>
          Login
        </h2>

        <div className='flex flex-col w-80'>
          <div className='mb-4'>
            <div className='mb-4'>
              <TextField
                variant='outlined'
                label='Phone Number'
                sx={{width: 1}}
              />
            </div>
          </div>

          <div className='mb-2 w-full'>
            <Button
              variant={"contained"}
              style={{backgroundColor: "#FB5533"}}
              sx={{width: 1}}
            >
              <div className='font-Poppins text-base mt-1 mb-1 tracking-widest font-bold'>
                NEXT
              </div>
            </Button>
          </div>

          <div className='flex items-center justify-evenly mb-6'>
            <div className='bg-dividerColor h-[1px] w-full' />
            <div className='whitespace-nowrap mr-4 ml-4 text-secondaryTextColor'>
              Or
            </div>
            <div className='bg-dividerColor h-[1px] w-full' />
          </div>

          <div className='mb-6 flex justify-evenly'>
            <div
              className='flex justify-center items-center p-2 border-[1px] 
                border-dividerColor rounded-md cursor-pointer
                shadow-sm hover:shadow-md hover:border-primaryColor
                transition-all ease-out duration-200 mr-2'
            >
              <img src={FacebookIcon} className='h-8 mr-2' />
              <div className='font-Poppins text-sm tracking-wide font-semibold'>
                Facebook
              </div>
            </div>
            <div
              className='flex justify-center items-center p-2 border-[1px] 
                border-dividerColor rounded-md cursor-pointer
                shadow-sm hover:shadow-md hover:border-primaryColor
                transition-all ease-out duration-200'
            >
              <img src={GoogleIcon} className='h-8 mr-2' />
              <div className='font-Poppins text-sm tracking-wide font-semibold'>
                Google
              </div>
            </div>
          </div>

          <div
            className='text-center text-xs text-secondaryTextColor font-Roboto
            tracking-wide ml-4 mr-4 mb-6'
          >
            By signing up, you agree to Shopee's{" "}
            <a href='#' className='text-primaryColor'>
              Terms of Services
            </a>{" "}
            &{" "}
            <a href='#' className='text-primaryColor'>
              Privacy Policy
            </a>
          </div>

          <div className='flex justify-center items-center'>
            <div className='text-secondaryTextColor text-sm'>
              Have an account?{" "}
              <b className='text-primaryColor cursor-pointer text-sm'>Log in</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <div className='w-screen h-auto'>
      <TopAppBar />
      <AppBody />
      <BottomBar />
    </div>
  );
}
