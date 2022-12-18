import React from "react";
import {IconButton} from "@mui/material";
import {Search} from "@mui/icons-material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {MonetizationOn} from "@mui/icons-material";
import {LocalShipping} from "@mui/icons-material";
import {Storefront} from "@mui/icons-material";
import {ConfirmationNumber} from "@mui/icons-material";
import {AttachMoney} from "@mui/icons-material";
import {Store} from "@mui/icons-material";
import {Public} from "@mui/icons-material";
import {DevicesOther} from "@mui/icons-material";
import {Loyalty} from "@mui/icons-material";
import {Token} from "@mui/icons-material";
import {ShoppingCart} from "@mui/icons-material";

import BigSale from "./assets/images/big-christmas-sale.jpg";
import SaluSalo from "./assets/images/pinoy-salu-salo.jpg";
import ShopeeBeauty from "./assets/images/shopee-beauty.jpg";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import BluetoothEarbuds from "./assets/images/TopProducts/bluetooth-earbuds.jpg";
import StainlessSteelTumbler from "./assets/images/TopProducts/tumbler.jpg";
import Sandals from "./assets/images/TopProducts/sandals.jpg";
import PoloForMen from "./assets/images/TopProducts/polo.jpg";
import KoreanRubberShoe from "./assets/images/TopProducts/rubber-shoes.jpg";
import BluetoothEarphone from "./assets/images/TopProducts/bluetooth-earphones.jpg";
import SleeveDress from "./assets/images/TopProducts/sleeve-dress.jpg";
import WaterBottle from "./assets/images/TopProducts/water-bottle.jpg";
import SpinningPen from "./assets/images/TopProducts/spinning-pen.jpg";
import SofaCover from "./assets/images/TopProducts/elastic-sofa-cover.jpg";

import {BottomBar} from "./Login";
import DailyDiscover1 from "./assets/images/DailyDiscover/daily-discover-1.jpg";
import DailyDiscover2 from "./assets/images/DailyDiscover/daily-discover-2.jpg";
import DailyDiscover3 from "./assets/images/DailyDiscover/daily-discover-3.jpg";
import DailyDiscover4 from "./assets/images/DailyDiscover/daily-discover-4.jpg";
import DailyDiscover5 from "./assets/images/DailyDiscover/daily-discover-6.jpg";
import DailyDiscover6 from "./assets/images/DailyDiscover/daily-discover-5.jpg";
import DailyDiscover7 from "./assets/images/DailyDiscover/daily-discover-7.jpg";
import DailyDiscover8 from "./assets/images/DailyDiscover/daily-discover-8.jpg";

export function TopAppBar() {
  return (
    <header className='w-full bg-primaryColor p-4 pl-6 pr-6'>
      <section className='flex'>
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
          <a
            className='text-white text-lg p-2 cursor-pointer mr-4'
            href='/login'
          >
            Login
          </a>
        </div>
      </section>
    </header>
  );
}

function AppBody() {
  const ItemsForSale = [
    {
      productTitle: "fashion mini backpack for women",
      price: "₱100",
      numberOfSold: "10.9K",
      img: DailyDiscover1,
    },
    {
      productTitle: "Unisex Cotton jogger pants",
      price: "₱98",
      numberOfSold: "7.6K",
      img: DailyDiscover2,
    },
    {
      productTitle: "Womens Summer Slippers",
      price: "₱78",
      numberOfSold: "4.5K",
      img: DailyDiscover3,
    },
    {
      productTitle: "Lucky Attack on Titan Premium",
      price: "₱89",
      numberOfSold: "1.9K",
      img: DailyDiscover4,
    },
    {
      productTitle: "Bumper Phone Case",
      price: "₱61",
      numberOfSold: "18.7K",
      img: DailyDiscover5,
    },
    {
      productTitle: "South Korean high rubber shoes",
      price: "₱92",
      numberOfSold: "2.9K",
      img: DailyDiscover6,
    },
    {
      productTitle: "5 Packs of Piattos (40g)",
      price: "₱83",
      numberOfSold: "2.5K",
      img: DailyDiscover7,
    },
    {
      productTitle: "R&O Korean Sling shoulder",
      price: "₱85",
      numberOfSold: "5.6K",
      img: DailyDiscover8,
    },
  ];

  const FeatureList = [
    {name: "Coin Rewards", img: <MonetizationOn />},
    {name: "Free Shipping", img: <LocalShipping />},
    {name: "Shopee Mall", img: <Storefront />},
    {name: "Vouchers", img: <ConfirmationNumber />},
    {name: "1 ₱ Deals", img: <AttachMoney />},
    {name: "Shopee Supermarket", img: <Store />},
    {name: "Global Deals", img: <Public />},
    {name: "Gadget Zone", img: <DevicesOther />},
    {name: "Shopee Loyalty", img: <Loyalty />},
    {name: "All Promos", img: <Token />},
  ];

  const Categories = [
    "Men's Apparel",
    "Mobiles & Gadgets",
    "Mobiles Accesories",
    "Home Entertainment",
    "Babies & Kids",
    "Home & Living",
    "Groceries",
    "Toys, Games & Collectibles",
    "Women's Bags",
    "Women Accesories",
    "Women's Shoes",
    "Hobbies and Stationaries",
    "Gaming",
    "Audio",
    "Women's Apparel",
    "Health & Personal Care",
    "Makeup & Fragrances",
    "Home Appliances",
    "Laptops & Computers",
    "Cameras",
    "Sports & Travel",
    "Men's Bags & Accesories",
    "Men's Shoes",
    "Motors",
    "Digital Goods & Vouchers",
    "ShopeePay Near Me",
  ];

  const TopProducts = [
    {name: "TWS Bluethoot Earbuds", img: BluetoothEarbuds, sales: "110k+"},
    {
      name: "Stainless Steel Tumbler",
      img: StainlessSteelTumbler,
      sales: "69K+",
    },
    {name: "Sandals With Heels", img: Sandals, sales: "83K+"},
    {name: "Polo For Men", img: PoloForMen, sales: "94K+"},
    {name: "Korean Rubber Shoe", img: KoreanRubberShoe, sales: "79K+"},
    {name: "Bluethooth Earphone", img: BluetoothEarphone, sales: "103K+"},
    {name: "Women's Puff Sleeve Dress", img: SleeveDress, sales: "91K+"},
    {name: "Water Bottle", img: WaterBottle, sales: "130K+"},
    {name: "Spinning Pen", img: SpinningPen, sales: "106K+"},
    {name: "Elastic Sofa Cover", img: SofaCover, sales: "70K+"},
  ];

  const [openFeatures, setOpenFeatures] = React.useState(true);

  const handleFeatures = () => {
    setOpenFeatures(!openFeatures);
  };

  const [openCategories, setOpenCategories] = React.useState(true);

  const handleCategories = () => {
    setOpenCategories(!openCategories);
  };

  return (
    <div className='h-full w-full flex border-b-2 border-primaryColor'>
      {/* Side Navigation */}
      <section className='w-[280px] ml-2 mr-2 overflow-y-auto border-r-[1px] border-dividerColor'>
        <List
          sx={{width: "100%", maxWidth: 320, bgcolor: "background.paper"}}
          component='nav'
        >
          <ListItemButton
            onClick={handleFeatures}
            sx={{margin: 1, borderRadius: 2}}
          >
            <ListItemText primary='Features' sx={{color: "#FB5533"}} />
            {openFeatures ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openFeatures} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {FeatureList.map((data, i) => {
                return (
                  <ListItemButton sx={{margin: 1, borderRadius: 2}}>
                    <ListItemIcon>{data.img}</ListItemIcon>
                    <ListItemText primary={data.name} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton
            onClick={handleCategories}
            sx={{margin: 1, borderRadius: 2}}
          >
            <ListItemText primary='Categories' sx={{color: "#FB5533"}} />
            {openCategories ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openCategories} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              {Categories.map((data, i) => {
                return (
                  <ListItemButton sx={{margin: 1, borderRadius: 2}}>
                    <ListItemText primary={data} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
      </section>

      {/* Main Content */}
      <div className='mr-4 mt-4'>
        <section className='flex flex-col justify-center'>
          <img src={SaluSalo} className='ml-8 mr-8 rounded-2xl' />
          <div className='flex justify-around mt-8 items-center'>
            <img src={BigSale} className='rounded-2xl h-34' />
            <img src={ShopeeBeauty} className='rounded-2xl h-34' />
          </div>
        </section>

        {/* Top Products */}
        <div className='mt-8 ml-4 mr-4'>
          <h2 className='text-center font-Poppins text-2xl tracking-wide text-primaryColor mb-4'>
            Top Products
          </h2>
          <section className='grid grid-cols-5'>
            {TopProducts.map((data, i) => {
              return (
                <a
                  className='mb-4 mr-4 ml-4 p-2 border-[1px] border-dividerColor 
                      rounded-md shadow-md cursor-pointer hover:border-primaryColor 
                      hover:shadow-lg transition-all duration-200 ease-in-out 
                      font-Roboto'
                  href='/topproduct'
                >
                  <div className='flex justify-center'>
                    <img src={data.img} className='rounded-lg' />
                  </div>
                  <div className='text-center mt-4 text-sm'>{data.name}</div>
                </a>
              );
            })}
          </section>
        </div>

        {/* Daily Discover */}
        <section className='mr-4 mt-4'>
          <h2 className='text-center font-Poppins text-2xl tracking-wide text-primaryColor mb-4'>
            Daily Discover
          </h2>
          <div className='grid grid-cols-5'>
            {ItemsForSale.map((data, i) => {
              return (
                <a
                  className='mb-4 mr-4 ml-4 p-2 border-[1px] border-dividerColor 
                  rounded-md shadow-md cursor-pointer hover:border-primaryColor 
                  hover:shadow-lg transition-all duration-200 ease-in-out 
                  font-Roboto flex flex-col justify-between'
                  href='/dailydiscover'
                >
                  <div className='flex justify-center'>
                    <img src={data.img} className='rounded-lg' />
                  </div>
                  <div className='text-center mt-2 text-base '>
                    {data.productTitle}
                  </div>
                  <div className='flex justify-between mt-4'>
                    <div className='text-primaryColor text-sm'>
                      {data.price}
                    </div>
                    <div className='text-xs text-secondaryTextColor self-center'>
                      {data.numberOfSold} sold
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export function App() {
  const SampleChipData = [
    "Shoes for Men",
    "Dress",
    "Sandals for Women",
    "Mobile & Gadgets",
    "Cameras",
    "Groceries",
    "Croptop",
    "Bag",
    "Polo shirt for men",
  ];

  const SuggestionChips = () => {
    return (
      <div
        className='pl-4 pr-4 pt-2 pb-2 flex justify-center border-b-[1px] border-dividerColor
        font-Roboto'
      >
        <Stack direction='row' spacing={1}>
          {SampleChipData.map((data, i) => {
            return <Chip key={i} label={data} variant='outlined' clickable />;
          })}
        </Stack>
      </div>
    );
  };

  document.title = "Shopee";
  return (
    <div className='w-screen h-auto'>
      <TopAppBar />
      <SuggestionChips />
      <AppBody />
      <BottomBar />
    </div>
  );
}
