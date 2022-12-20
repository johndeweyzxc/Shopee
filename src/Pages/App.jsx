import React from "react";

import {MonetizationOn, LocalShipping, Storefront} from "@mui/icons-material";
import {
  ConfirmationNumber,
  AttachMoney,
  Store,
  Public,
} from "@mui/icons-material";
import {DevicesOther, Loyalty, Token, ShoppingCart} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

import BigSale from "../assets/images/big-christmas-sale.jpg";
import SaluSalo from "../assets/images/pinoy-salu-salo.jpg";
import ShopeeBeauty from "../assets/images/shopee-beauty.jpg";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import BluetoothEarbuds from "../assets/images/TopProducts/bluetooth-earbuds.jpg";
import StainlessSteelTumbler from "../assets/images/TopProducts/tumbler.jpg";
import Sandals from "../assets/images/TopProducts/sandals.jpg";
import PoloForMen from "../assets/images/TopProducts/polo.jpg";
import KoreanRubberShoe from "../assets/images/TopProducts/rubber-shoes.jpg";
import BluetoothEarphone from "../assets/images/TopProducts/bluetooth-earphones.jpg";
import SleeveDress from "../assets/images/TopProducts/sleeve-dress.jpg";
import WaterBottle from "../assets/images/TopProducts/water-bottle.jpg";
import SpinningPen from "../assets/images/TopProducts/spinning-pen.jpg";
import SofaCover from "../assets/images/TopProducts/elastic-sofa-cover.jpg";

import DailyDiscover1 from "../assets/images/DailyDiscover/daily-discover-1.jpg";
import DailyDiscover2 from "../assets/images/DailyDiscover/daily-discover-2.jpg";
import DailyDiscover3 from "../assets/images/DailyDiscover/daily-discover-3.jpg";
import DailyDiscover4 from "../assets/images/DailyDiscover/daily-discover-4.jpg";
import DailyDiscover5 from "../assets/images/DailyDiscover/daily-discover-6.jpg";
import DailyDiscover6 from "../assets/images/DailyDiscover/daily-discover-5.jpg";
import DailyDiscover7 from "../assets/images/DailyDiscover/daily-discover-7.jpg";
import DailyDiscover8 from "../assets/images/DailyDiscover/daily-discover-8.jpg";
import BottomBar from "./Components/BottomBar";
import MainTopBar from "./Components/MainTopBar";

function AppBody() {
  const ItemsForSale = [
    {
      productTitle: "fashion mini backpack for women",
      price: "₱100",
      numberOfSold: "10.9K",
      img: DailyDiscover1,
      shopName: "First Shop",
    },
    {
      productTitle: "Unisex Cotton jogger pants",
      price: "₱98",
      numberOfSold: "7.6K",
      img: DailyDiscover2,
      shopName: "Second Shop",
    },
    {
      productTitle: "Womens Summer Slippers",
      price: "₱78",
      numberOfSold: "4.5K",
      img: DailyDiscover3,
      shopName: "Third Shop",
    },
    {
      productTitle: "Lucky Attack on Titan Premium",
      price: "₱89",
      numberOfSold: "1.9K",
      img: DailyDiscover4,
      shopName: "Fourth Shop",
    },
    {
      productTitle: "Bumper Phone Case",
      price: "₱61",
      numberOfSold: "18.7K",
      img: DailyDiscover5,
      shopName: "Fifth Shop",
    },
    {
      productTitle: "South Korean high rubber shoes",
      price: "₱92",
      numberOfSold: "2.9K",
      img: DailyDiscover6,
      shopName: "Sixth Shop",
    },
    {
      productTitle: "5 Packs of Piattos (40g)",
      price: "₱83",
      numberOfSold: "2.5K",
      img: DailyDiscover7,
      shopName: "Seventh Shop",
    },
    {
      productTitle: "R&O Korean Sling shoulder",
      price: "₱85",
      numberOfSold: "5.6K",
      img: DailyDiscover8,
      shopName: "Eighth Shop",
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
      <section className='w-96 ml-2 mr-2 overflow-y-auto border-r-[1px] border-dividerColor'>
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
          <section className='flex flex-wrap justify-center'>
            {TopProducts.map((data, i) => {
              return (
                <a
                  className='mb-4 mr-4 ml-4 p-2 border-2 border-dividerColor 
                    rounded-md shadow-md cursor-pointer hover:border-primaryColor 
                    hover:shadow-lg transition-all duration-200 ease-in-out 
                    font-Roboto flex flex-col justify-between w-44'
                  href='/topproduct'
                >
                  <div className='flex justify-center'>
                    <img src={data.img} className='rounded-lg' />
                  </div>
                  <div className='text-center mt-4 text-sm'>{data.name}</div>
                  <div className='text-center mt-2 text-xs text-secondaryTextColor'>
                    Monthly Sales {data.sales}
                  </div>
                  <div className='h-[2px] bg-dividerColor mt-4 mb-4' />
                  <div className='flex justify-end items-center'>
                    <div
                      className='text-white text-sm bg-primaryColor px-4 py-1 tracking-wide
                      rounded-full text-Roboto border-2 border-primaryColor hover:bg-primaryBgColor 
                      hover:text-primaryColor transition-all duration-100 ease-in-out'
                    >
                      Buy
                    </div>
                  </div>
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
          <div className='flex flex-wrap justify-center'>
            {ItemsForSale.map((data, i) => {
              return (
                <a
                  className='mb-4 mr-4 ml-4 p-2 border-2 border-dividerColor 
                  rounded-md shadow-md cursor-pointer hover:border-primaryColor 
                  hover:shadow-lg transition-all duration-200 ease-in-out 
                  font-Roboto flex flex-col justify-between w-44'
                  href={`/shop/${data.shopName}`}
                >
                  <div className='flex justify-center'>
                    <img src={data.img} className='rounded-lg' />
                  </div>
                  <div className='text-center mt-2 text-sm '>
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
                  <div className='h-[2px] bg-dividerColor mt-2 mb-2' />
                  <div className='flex justify-between items-center'>
                    <Tooltip title='Add to Cart' placement='top' arrow>
                      <IconButton>
                        <ShoppingCart
                          sx={{color: "#000", cursor: "pointer", height: 18}}
                        />
                      </IconButton>
                    </Tooltip>
                    <div
                      className='text-white text-sm bg-primaryColor px-4 py-1 tracking-wide
                      rounded-full text-Roboto border-2 border-primaryColor hover:bg-primaryBgColor 
                      hover:text-primaryColor transition-all duration-100 ease-in-out'
                    >
                      Buy
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

export default function App() {
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
      <MainTopBar />
      <SuggestionChips />
      <AppBody />
      <BottomBar />
    </div>
  );
}
