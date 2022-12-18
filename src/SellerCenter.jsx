import React from "react";
import ShopeeHeader from "./assets/images/shopee-on-white.jpg";
import FacebookBlack from "./assets/images/FollowUs/facebook-icon.png";
import InstagramBlack from "./assets/images/FollowUs/instagram-icon.png";
import PowerSeller from "./assets/images/SellerCenter/PowerSeller.jpg";

import {Button, TextField, IconButton} from "@mui/material";
import {FormControl, OutlinedInput} from "@mui/material";
import {InputLabel, InputAdornment} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

function TopAppBar() {
  return (
    <header className='bg-primaryBgColor p-4 ml-12 mr-12 flex justify-between'>
      <img src={ShopeeHeader} />
      <div className='flex items-center'>
        <a
          className='mr-4 text-secondaryTextColor text-sm font-OpenSans font-medium
          hover:underline cursor-pointer'
          href='/shopeehomepage'
        >
          Shopee Homepage
        </a>
        <div className='flex'>
          <a className='w-8 h-8 mr-2' href='/facebook'>
            <img src={FacebookBlack} />
          </a>
          <a className='h-8 w-8' href='/facebook'>
            <img src={InstagramBlack} />
          </a>
        </div>
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
    <div className='w-full bg-secondaryBgColor flex pt-16 pb-16 justify-center'>
      <section className='font-OpenSans font-medium w-1/3 mr-44 ml-16'>
        <h1 className='text-primaryColor text-3xl mb-2'>Be a Power Seller</h1>
        <div className='text-secondaryTextColor text-xl mb-8'>
          Manage your shop efficiently on Shopee with our Shopee Seller Cente
        </div>
        <img src={PowerSeller} className='rounded-lg' />
      </section>

      <section className='rounded-md bg-primaryBgColor p-8 mr-16 ml-16 w-1/3'>
        <h2 className='mb-6 text-xl font-OpenSans font-medium text-center'>
          Login to Seller Center
        </h2>
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

        <div className='mb-4'>
          <a href='/forgotpassword' className='text-sm text-blue-500'>
            Forgot your Password?
          </a>
        </div>
        <Button
          variant={"contained"}
          style={{backgroundColor: "#FB5533"}}
          sx={{width: 1}}
        >
          <div className='font-OpenSans text-base mt-1 mb-1 font-medium'>
            Log In
          </div>
        </Button>

        <div className='flex justify-center items-center font-Roboto mt-8 mb-8'>
          <div className='text-secondaryTextColor text-sm'>
            New to Shopee?{" "}
            <a href='/register'>
              <b className='text-blue-500 cursor-pointer text-sm'>
                Create an account
              </b>
            </a>
          </div>
        </div>

        <div className='flex items-center justify-evenly mb-6 font-Roboto'>
          <div className='bg-dividerColor h-[1px] w-full' />
          <div className='whitespace-nowrap mr-4 ml-4 text-secondaryTextColor'>
            OR
          </div>
          <div className='bg-dividerColor h-[1px] w-full' />
        </div>

        <a href='/login'>
          <Button
            variant={"text"}
            sx={{width: 1, color: "#000", textTransform: "none"}}
            size='small'
          >
            <div className='font-OpenSans text-sm mt-1 mb-1 font-mediu'>
              Login with Main or Sub account
            </div>
          </Button>
        </a>
      </section>
    </div>
  );
}

export default function SellerCenter() {
  document.title = "Shopee Seller Center";
  return (
    <div className='w-screen h-auto'>
      <TopAppBar />
      <AppBody />
    </div>
  );
}
