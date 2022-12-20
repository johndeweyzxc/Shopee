import React from "react";

import MainTopBar from "./Components/MainTopBar";
import BottomBar from "./Components/BottomBar";

import {Button} from "@mui/material";
import {Check} from "@mui/icons-material";
import {TrendingUp as GrowYourBusiness} from "@mui/icons-material";
import {Speed as FastSelling} from "@mui/icons-material";
import {LocalShipping as SellerPromos} from "@mui/icons-material";
import {School as SellerEducation} from "@mui/icons-material";
import {CreditScore as QuickPayments} from "@mui/icons-material";
import {HowToReg as FreeRegistration} from "@mui/icons-material";
import {Diversity3 as ServerAffiliate} from "@mui/icons-material";
import {SupportAgent as OperationalSupport} from "@mui/icons-material";
import {LiveTv as ShopeeLivestream} from "@mui/icons-material";
import {Storefront as ShopeeSellerCenter} from "@mui/icons-material";
import {Hub as EducationHub} from "@mui/icons-material";
import {InsertChart as FastTrackProgram} from "@mui/icons-material";
import {Call as Phone} from "@mui/icons-material";
import {AlternateEmail as EmailAt} from "@mui/icons-material";

function GetStarted() {
  const MarketPlace = [
    "Open to all types of sellers",
    "Start selling right away",
    "ZERO commision fees for six months",
  ];

  const ShopeeMall = [
    "Open to official brands and authorized distributors",
    "Minimal fees",
    "Mall-exclusive in-app features like Games campaigns",
    "Mall-only brand-led campaigns such as Super Brand Day",
  ];

  return (
    <div className='mt-24 p-24 bg-secondaryBgColor w-full'>
      <h2 className='text-center text-3xl text-primaryColor font-Poppins'>
        Get Started
      </h2>
      <div className='flex justify-evenly mt-12'>
        <section
          className='bg-primaryBgColor p-8 rounded-xl shadow-xl w-1/3 cursor-pointer
            border-2 border-primaryBgColor hover:border-primaryColor
            transition-all ease-in-out duration-200 flex flex-col justify-between'
        >
          <div>
            <h3 className='text-center text-2xl text-primaryColor font-OpenSans font-medium mb-4'>
              Marketplace
            </h3>
            <ul>
              {MarketPlace.map((data, i) => {
                return (
                  <li className='mb-2'>
                    <div className='flex'>
                      <div className='mr-4'>
                        <Check sx={{color: "#00c853"}} />
                      </div>
                      <div className='text-lg text-secondaryTextColor font-OpenSans font-medium'>
                        {data}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='mt-8 w-full flex justify-between'>
            <Button>
              <div className='text-base font-OpenSans font-medium'>
                LEARN MORE
              </div>
            </Button>
            <Button variant='contained'>
              <div className='text-base font-OpenSans font-medium'>
                CREATE A SHOP
              </div>
            </Button>
          </div>
        </section>

        <section
          className='bg-primaryBgColor p-8 rounded-xl shadow-xl w-1/3 cursor-pointer
            border-2 border-primaryBgColor hover:border-primaryColor
            transition-all ease-in-out duration-200 flex flex-col justify-between'
        >
          <div>
            <h3 className='text-center text-2xl text-primaryColor font-OpenSans font-medium mb-4'>
              Shopee Mall
            </h3>
            <ul>
              {ShopeeMall.map((data, i) => {
                return (
                  <li className='mb-2'>
                    <div className='flex'>
                      <div className='mr-4'>
                        <Check sx={{color: "#00c853"}} />
                      </div>
                      <div className='text-lg text-secondaryTextColor font-OpenSans font-medium'>
                        {data}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='mt-8 w-full flex justify-between'>
            <Button>
              <div className='text-base font-OpenSans font-medium'>
                LEARN MORE
              </div>
            </Button>
            <Button variant='contained'>
              <div className='text-base font-OpenSans font-medium'>SIGN UP</div>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

function KeyBenefits() {
  const Benefits = [
    {
      icon: GrowYourBusiness,
      name: "Grow your Business",
      description: "Gain New Buyers Nationwide",
    },
    {
      icon: FastSelling,
      name: "Fast and Convenient",
      description: "Sell conveniently using your mobile phone",
    },
    {
      icon: SellerPromos,
      name: "Seller Promos",
      description:
        "Enjoy seller promos like free shipping, voucher codes, and more",
    },
    {
      icon: SellerEducation,
      name: "Seller Education",
      description:
        "Attend free trainings and seminars on how to operate and optimize your shop",
    },
    {
      icon: QuickPayments,
      name: "Quick and Easy Payments",
      description: "Provide buyers with various payment methods",
    },
    {
      icon: FreeRegistration,
      name: "Free Registration",
      description: "Enjoy zero registration or listing fees",
    },
    {
      icon: ServerAffiliate,
      name: "Seller Affiliate Program",
      description:
        "Earn cash by sharing your shop's affiliate link on your social media platforms",
    },
    {
      icon: OperationalSupport,
      name: "Operational Support",
      description:
        "Get assistance on operational matters such as product listing, courier and payment concerns, and more",
    },
    {
      icon: ShopeeLivestream,
      name: "Shopee Livestream",
      description:
        "Sell products and chat with customers live through Shopee Livestream",
    },
  ];

  return (
    <div className='mt-24 p-24 bg-primaryBgColor w-full'>
      <h2 className='text-center text-3xl text-primaryColor font-Poppins'>
        Benefits
      </h2>
      <div className='flex justify-evenly flex-wrap mt-12'>
        {Benefits.map((data, i) => {
          return (
            <div
              className='bg-primaryBgColor p-6 m-4 rounded-xl shadow-lg w-52 cursor-pointer
                border-2 border-primaryBgColor transition-all ease-in-out duration-200 
                flex flex-col items-center justify-around hover:shadow-xl'
            >
              <data.icon fontSize='large' />
              <div className='text-center mb-4 mt-2 font-OpenSans font-medium '>
                {data.name}
              </div>
              <div className='text-center font-OpenSans text-secondaryTextColor text-sm'>
                {data.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SellerSupport() {
  const Support = [
    {
      name: "Shopee Seller Center",
      description: "Organize products, track orders, & check shop performance",
      img: ShopeeSellerCenter,
    },
    {
      name: "Seller Education Hub",
      description: "Discover how selling works on Shopee",
      img: EducationHub,
    },
    {
      name: "Community Seller Fast Track Program",
      description:
        "Sign up for our Seller Incubation Program to enjoy exclusive benefits",
      img: FastTrackProgram,
    },
  ];

  return (
    <div className='mt-24 p-24 bg-secondaryBgColor w-full'>
      <h2 className='text-center text-3xl text-primaryColor font-Poppins'>
        Seller Support
      </h2>
      <div className='mt-12 w-full flex justify-around'>
        {Support.map((data, i) => {
          return (
            <div
              className='p-8 m-8 bg-primaryBgColor flex flex-col items-center w-1/4
              shadow-lg rounded-2xl hover:shadow-xl cursor-pointer transition-all
              duration-200 ease-in-out'
            >
              <div className='mb-8'>
                <data.img sx={{fontSize: "8rem", color: "#FB5533"}} />
              </div>
              <div>
                <div className='text-xl font-OpenSans font-medium text-center'>
                  {data.name}
                </div>
                <div className='text-base font-OpenSans text-secondaryTextColor text-center'>
                  {data.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Clarification() {
  return (
    <div className='mt-24 p-24 bg-primaryBgColor w-full border-b-2 border-primaryColor'>
      <h2 className='text-center text-xl text-textColor font-OpenSans font-medium'>
        For any questions or clarifications, please contact Shopee's Customer
        Service through the following channels
      </h2>
      <div className='mt-8 w-full flex justify-center'>
        <div className='flex items-center mr-8'>
          <div className='mr-2'>
            <Phone fontSize='medium' sx={{color: "#616161"}} />
          </div>
          <div className='text-lg text-secondaryTextColor'>(02) 9999999999</div>
        </div>
        <div className='flex items-center'>
          <div className='mr-2'>
            <EmailAt fontSize='medium' sx={{color: "#616161"}} />
          </div>
          <div className='text-lg text-secondaryTextColor'>
            support@shopee.ph
          </div>
        </div>
      </div>
    </div>
  );
}

function AppBody() {
  return (
    <div className='w-full mt-24'>
      <h1 className='text-center text-5xl text-primaryColor font-Poppins'>
        Sell on Shopee Now!
      </h1>
      <GetStarted />
      <KeyBenefits />
      <SellerSupport />
      <Clarification />
    </div>
  );
}

export default function SellOnShopee() {
  document.title = "Sell on Shopee";
  return (
    <div className='w-screen h-auto'>
      <MainTopBar />
      <AppBody />
      <BottomBar />
    </div>
  );
}
