import React from 'react';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import BigSale from './assets/images/big-christmas-sale.jpg';
import SaluSalo from './assets/images/pinoy-salu-salo.jpg';
import ShopeeBeauty from './assets/images/shopee-beauty.jpg';

function TopAppBar() {
  return (
    <header className="w-full bg-primaryColor p-4 pl-6 pr-6">
      <section className="flex">
        <h1 className="text-2xl text-white font-Poppins font-semibold mr-8">Shopee</h1>
        <div className="flex bg-white p-2 rounded-full w-full">
          <input placeholder="Sign up and get 100% off on your first order" 
            className="text-base text-textColor font-Poppins outline-none pl-2 pr-2 w-full
            placeholder:font-Roboto placeholder:text-sm" />
          <IconButton sx={{padding: 0,}}>
            <Search />
          </IconButton>
        </div>
        <div className="w-full flex items-center ml-4">
          <div className="text-white font-Poppins text-xs p-2 cursor-pointer mr-[1px]">Sell on Shopee</div>
          <div className="text-white font-Poppins text-xs p-2 cursor-pointer mr-[1px]">Seller Center</div>
          <div className="text-white font-Poppins text-xs p-2 cursor-pointer mr-[1px]">Download</div>
          <div className="text-white font-Poppins text-xs p-2 cursor-pointer mr-[1px]">Help</div>
        </div>
        <div className="flex">
            <div className="text-white font-Poppins text-lg font-semibold p-2 cursor-pointer mr-4">
              Register
            </div>
          <div className="text-white font-Poppins text-lg font-semibold p-2 cursor-pointer mr-4">
            Login
          </div>
        </div>
      </section>
    </header>
  )
}

function AppBody() {
  const ItemsForSale = [
    {productTitle: "fashion mini backpack for women", price: "₱100", numberOfSold: "10.9K"},
    {productTitle: "Unisex Cotton jogger pants", price: "₱98", numberOfSold: "7.6K"},
    {productTitle: "Womens Summer Slippers", price: "₱78", numberOfSold: "4.5K"},
    {prouctTitle: "Lucky Attack on Titan Premium", price: "₱89", numberOfSold: "1.9K"},
    {productTitle: "Bumper Phone Case", price: "₱61", numberOfSold: "18.7K"},
    {productTitle: "South Korean high rubber shoes", price: "₱92", numberOfSold: "2.9K"},
    {productTitle: "5 Packs of Piattos (40g)", price: "₱83", numberOfSold: "2.5K"},
    {productTitle: "R&O Korean Sling shoulder", price: "₱85", numberOfSold: "5.6K"},
  ]

  const ShortcutList = [
    "Coin Rewards", "Free Shipping", "Shopee Mall", "Vouchers",
    "1 ₱ Deals", "Shopee Supermarket", "Global Deals",
    "Gadget Zone", "Shopee Loyalty", "All Promos"
  ]

  const Categories = [
    "Men's Apparel", "Mobiles & Gadgets", "Mobiles Accesories", "Home Entertainment",
    "Babies & Kids", "Home & Living", "Groceries", "Toys, Games & Collectibles",
    "Women's Bags", "Women Accesories", "Women's Shoes", "Hobbies and Stationaries",
    "Gaming", "Audio", "Women's Apparel", "Health & Personal Care", "Makeup & Fragrances",
    "Home Appliances", "Laptops & Computers", "Cameras", "Sports & Travel",
    "Men's Bags & Accesories", "Men's Shoes", "Motors", "Digital Goods & Vouchers",
    "ShopeePay Near Me"     
  ]

  return (
    <div className="h-full w-full m-4">
      <div>
      </div>
    </div>
  )
}

function App() {
  const SampleChipData = [
    "Shoes for Men", "Dress", "Sandals for Women", 
    "Mobile & Gadgets", "Cameras", "Groceries",
    "Croptop", "Bag", "Polo shirt for men"
  ];

  const SuggestionChips = () => {
    return (
      <div className="pl-4 pr-4 pt-2 pb-2 flex justify-center">
      <Stack direction="row" spacing={1}>
        {SampleChipData.map((data, i) => {
          return <Chip key={i} label={data} variant="outlined" clickable />
        })}
      </Stack>
      </div>
    )
  }

  return (
    <div className="w-screen h-auto">
      <TopAppBar />
      <SuggestionChips />
      <Divider />
      <AppBody />
    </div>
  )
}

export default App
