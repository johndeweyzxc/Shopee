import React from "react";
import {FormControl, OutlinedInput} from "@mui/material";
import {InputLabel, InputAdornment} from "@mui/material";
import {Button, TextField, IconButton} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

import ShopeeHeader from "./assets/images/shopee-on-white.jpg";
import ShopeeBig from "./assets/images/shopee-big.jpg";
import GoogleIcon from "./assets/images/google-icon.png";
import FacebookIcon from "./assets/images/facebook-icon.png";

import FacebookBlack from "./assets/images/FollowUs/facebook-icon.png";
import InstagramBlack from "./assets/images/FollowUs/instagram-icon.png";
import LinkedInBlack from "./assets/images/FollowUs/linked-in-icon.png";
import TwitterBlack from "./assets/images/FollowUs/twitter-icon.png";
import Payments from "./assets/images/payments.jpg";
import Logistics from "./assets/images/logistics.jpg";

import QrCode from "./assets/images/ShopeeAppDL/qr-code.jpg";
import AppStore from "./assets/images/ShopeeAppDL/app-store.jpg";
import GooglePlay from "./assets/images/ShopeeAppDL/google-play.jpg";
import AppGallery from "./assets/images/ShopeeAppDL/app-gallery.jpg";

export function TopAppBar() {
  return (
    <header className='w-full bg-primaryBgColor p-4 pl-6 pr-6 flex justify-between ml-12'>
      <img src={ShopeeHeader} />
      <div className='text-primaryColor cursor-pointer mr-20 flex justify-center items-center'>
        Need help?
      </div>
    </header>
  );
}
function AppBody() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          <div className='mb-4 font-Roboto'>
            <div className='mb-4'>
              <TextField variant='outlined' label='Username' sx={{width: 1}} />
            </div>
            <FormControl variant='outlined' sx={{width: 1}}>
              <InputLabel htmlFor='outlined-adornment-password'>
                Password
              </InputLabel>
              <OutlinedInput
                label='Password'
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          <div className='mb-2 w-full'>
            <Button
              variant={"contained"}
              style={{backgroundColor: "#FB5533"}}
              sx={{width: 1}}
            >
              <div className='font-Poppins text-base mt-1 mb-1 tracking-widest font-bold'>
                LOGIN
              </div>
            </Button>
          </div>

          <div className='flex justify-between mb-6 font-Roboto'>
            <a href='#' className='text-sm text-blue-500'>
              Forgot Password
            </a>
            <a href='#' className='text-sm text-blue-500'>
              Login with phone number
            </a>
          </div>

          <div className='flex items-center justify-evenly mb-6 font-Roboto'>
            <div className='bg-dividerColor h-[1px] w-full' />
            <div className='whitespace-nowrap mr-4 ml-4 text-secondaryTextColor'>
              Or login with
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

          <div className='flex justify-center items-center font-Roboto'>
            <div className='text-secondaryTextColor text-sm'>
              New to Shopee?{" "}
              <b className='text-primaryColor cursor-pointer text-sm'>
                Sign up
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BottomBar() {
  const FollowUs = [
    {name: "Facebook", img: FacebookBlack},
    {name: "Instagram", img: InstagramBlack},
    {name: "Twitter", img: TwitterBlack},
    {name: "LinkedIn", img: LinkedInBlack},
  ];

  const CustomerService = [
    "Help Centre",
    "Shopee Cares PH",
    "Payment Methods",
    "ShopeePay",
    "Shopee Coins",
    "Order Tracking",
    "Free Shipping",
    "Return & Refund",
    "Shopee Gurantee",
    "Overseas Product",
    "Contact Us",
  ];

  const AboutShopee = [
    "About Us",
    "Shopee Blog",
    "Shopee Careers",
    "Shopee Policies",
    "Privacy Policy",
    "Shopee Mall",
    "Seller Centre",
    "Flash Deals",
    "Media Contact",
  ];

  return (
    <div className='bg-primaryBgColor p-24 font-Roboto w-full'>
      <div className='flex justify-between'>
        <section className='flex'>
          <div className='mr-24'>
            <h4 className='mb-4'>CUSTOMER SERVICE</h4>
            {CustomerService.map((data, i) => {
              return (
                <div
                  className='mb-2 text-sm cursor-pointer text-secondaryTextColor 
                hover:text-primaryColor'
                >
                  {data}
                </div>
              );
            })}
          </div>
          <div className='mr-36'>
            <h4 className='mb-4'>ABOUT SHOPEE</h4>
            {AboutShopee.map((data, i) => {
              return (
                <div
                  className='mb-2 text-sm cursor-pointer text-secondaryTextColor 
                hover:text-primaryColor'
                >
                  {data}
                </div>
              );
            })}
          </div>
          <div className='mr-16'>
            <div className='mb-12'>
              <h4 className='mb-4'>PAYMENT</h4>
              <img src={Payments} />
            </div>
            <div>
              <h4 className='mb-4'>LOGISTICS</h4>
              <img src={Logistics} />
            </div>
          </div>
        </section>

        <section className='flex'>
          <div className='mr-28'>
            <h4 className='mb-4'>FOLLOW US</h4>
            {FollowUs.map((data, i) => {
              return (
                <div
                  className='text-sm text-secondaryTextColor flex mb-2 cursor-pointer
                hover:text-primaryColor self-center'
                >
                  <img src={data.img} className='h-6 mr-2' />
                  {data.name}
                </div>
              );
            })}
          </div>
          <div>
            <h4 className='mb-4'>SHOPEE APP DOWNLOAD</h4>
            <div className='flex'>
              <div className='mr-2'>
                <img
                  src={QrCode}
                  className='border-[1px] border-dividerColor rounded-md shadow-sm cursor-pointer'
                />
              </div>
              <div className='flex flex-col justify-between'>
                <img
                  src={AppStore}
                  className='border-[1px] border-dividerColor rounded-md shadow-sm cursor-pointer'
                />
                <img
                  src={GooglePlay}
                  className='border-[1px] border-dividerColor rounded-md shadow-sm cursor-pointer'
                />
                <img
                  src={AppGallery}
                  className='border-[1px] border-dividerColor rounded-md shadow-sm cursor-pointer'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function Login() {
  return (
    <div className='w-screen h-auto'>
      <TopAppBar />
      <AppBody />
      <BottomBar />
    </div>
  );
}
