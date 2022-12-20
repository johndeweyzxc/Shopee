import React from "react";

import FacebookBlack from "../../assets/images/FollowUs/facebook-icon.png";
import InstagramBlack from "../../assets/images/FollowUs/instagram-icon.png";
import LinkedInBlack from "../../assets/images/FollowUs/linked-in-icon.png";
import TwitterBlack from "../../assets/images/FollowUs/twitter-icon.png";
import Payments from "../../assets/images/payments.jpg";
import Logistics from "../../assets/images/logistics.jpg";
import QrCode from "../../assets/images/ShopeeAppDL/qr-code.jpg";
import AppStore from "../../assets/images/ShopeeAppDL/app-store.jpg";
import GooglePlay from "../../assets/images/ShopeeAppDL/google-play.jpg";
import AppGallery from "../../assets/images/ShopeeAppDL/app-gallery.jpg";

export default function BottomBar() {
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

  const FollowUs = [
    {name: "Facebook", img: FacebookBlack},
    {name: "Instagram", img: InstagramBlack},
    {name: "Twitter", img: TwitterBlack},
    {name: "LinkedIn", img: LinkedInBlack},
  ];

  const ShopeeAppDownload = [
    {name: "appstore", img: AppStore},
    {name: "googleplay", img: GooglePlay},
    {name: "appgallery", img: AppGallery},
  ];

  return (
    <div className='bg-primaryBgColor p-24 font-Roboto w-full'>
      <div className='flex justify-between'>
        <section className='flex'>
          <div className='mr-24'>
            <h4 className='mb-4'>CUSTOMER SERVICE</h4>
            {CustomerService.map((data, i) => {
              return (
                <div className='mb-2'>
                  <a
                    className='cursor-pointer text-sm text-secondaryTextColor 
                      hover:text-primaryColor'
                    href={`/${data}`}
                  >
                    {data}
                  </a>
                </div>
              );
            })}
          </div>
          <div className='mr-36'>
            <h4 className='mb-4'>ABOUT SHOPEE</h4>
            {AboutShopee.map((data, i) => {
              return (
                <div className='mb-2 '>
                  <a
                    className='text-sm cursor-pointer text-secondaryTextColor 
                      hover:text-primaryColor'
                    href={`/${data}`}
                  >
                    {data}
                  </a>
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
                <div className='mb-2'>
                  <a
                    className='flex cursor-pointer text-sm text-secondaryTextColor 
                        hover:text-primaryColor self-center'
                    href={`/${data.name}`}
                  >
                    <img src={data.img} className='h-6 mr-2' />
                    {data.name}
                  </a>
                </div>
              );
            })}
          </div>
          <div>
            <h4 className='mb-4'>SHOPEE APP DOWNLOAD</h4>
            <div className='flex'>
              <a
                className='mr-2 border-[1px] border-dividerColor 
                    rounded-md shadow-sm cursor-pointer'
                href='/qrcode'
              >
                <img src={QrCode} />
              </a>
              <div className='flex flex-col justify-between'>
                {ShopeeAppDownload.map((data, i) => {
                  return (
                    <a
                      className='border-[1px] border-dividerColor 
                          rounded-md shadow-sm cursor-pointer'
                      href={`/${data.name}`}
                    >
                      <img src={data.img} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
