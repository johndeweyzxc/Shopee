import React from "react";

import ShopeeBig from "../assets/images/shopee-big.jpg";
import GoogleIcon from "../assets/images/google-icon.png";
import FacebookIcon from "../assets/images/facebook-icon.png";

import {FormControl, OutlinedInput} from "@mui/material";
import {InputLabel, InputAdornment} from "@mui/material";
import {Button, TextField, IconButton} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

import TopBar from "./Components/TopBar";
import BottomBar from "./Components/BottomBar";

function AppBody() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='w-full bg-primaryColor flex pt-16 pb-16 justify-center'>
      <div className='flex flex-col justify-center mr-16 ml-16 font-Poppins'>
        <img src={ShopeeBig} className='h-60 self-center mb-8' />
        <h2 className='text-white text-3xl text-Poppins text-center mb-4'>
          The leading online shopping platform
        </h2>
        <h2 className='text-white text-3xl text-Poppins text-center'>
          in Southeast Asia and Taiwan
        </h2>
      </div>

      <div className='rounded-md bg-primaryBgColor p-8 mr-16 ml-16'>
        <h2 className='mb-6 text-xl font-Poppins'>Login</h2>

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
              <div className='font-OpenSans font-medium text-base mt-1 mb-1 tracking-wide'>
                LOGIN
              </div>
            </Button>
          </div>

          <div className='flex justify-between mb-6 font-Roboto'>
            <a href='/forgotpassword' className='text-sm text-blue-500'>
              Forgot Password
            </a>
            <a href='/loginwithphonenumber' className='text-sm text-blue-500'>
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
              <a
                className='font-OpenSans font-medium text-sm tracking-wide flex items-center'
                href='/facebook'
              >
                <img src={FacebookIcon} className='h-8 mr-2' />
                Facebook
              </a>
            </div>
            <div
              className='flex justify-center items-center p-2 border-[1px] 
                border-dividerColor rounded-md cursor-pointer
                shadow-sm hover:shadow-md hover:border-primaryColor
                transition-all ease-out duration-200'
            >
              <a
                className='font-OpenSans text-sm tracking-wide font-medium flex items-center'
                href='/google'
              >
                <img src={GoogleIcon} className='h-8 mr-2' />
                Google
              </a>
            </div>
          </div>

          <div className='flex justify-center items-center font-Roboto'>
            <div className='text-secondaryTextColor text-sm'>
              New to Shopee?{" "}
              <a href='/register'>
                <b className='text-primaryColor cursor-pointer text-sm'>
                  Sign up
                </b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  document.title = "Login";
  return (
    <div className='w-screen h-auto'>
      <TopBar />
      <AppBody />
      <BottomBar />
    </div>
  );
}
