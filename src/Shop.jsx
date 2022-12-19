import React from "react";
import {TopAppBar} from "./App";
import {ChevronRight as ArrowRight} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import {v4 as uuidv4} from "uuid";

import {List} from "@mui/material";
import {ListItemButton} from "@mui/material";
import {ListItemText} from "@mui/material";
import {Collapse} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {FormGroup} from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {Checkbox} from "@mui/material";
import {Typography} from "@mui/material";

import ShopBg from "./assets/images/ShopImages/shop-bg-image.jpg";
import {Add} from "@mui/icons-material";
import {CheckCircle} from "@mui/icons-material";
import {Chat} from "@mui/icons-material";
import {Circle} from "@mui/icons-material";
import {Storefront} from "@mui/icons-material";
import {Groups as Followers} from "@mui/icons-material";
import {Group as Following} from "@mui/icons-material";
import {StarRate} from "@mui/icons-material";
import {ManageAccounts as Join} from "@mui/icons-material";
import {Button} from "@mui/material";

import InstagramIcon from "./assets/images/instagram-icon.png";
import FacebookIcon from "./assets/images/facebook-icon.png";
import GoogleIcon from "./assets/images/google-icon.png";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function ShopSideCheckboxes({SideNavigationList}) {
  const CheckBoxes = (listData, uniqueId) => {
    return (
      <FormGroup sx={ListItemSettings} key={uniqueId}>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography
              color={"#616161"}
              fontFamily={"Roboto"}
              fontSize={"0.875rem"}
            >
              {listData}
            </Typography>
          }
        />
      </FormGroup>
    );
  };

  const ListItemSettings = {
    margin: 1,
    marginBottom: 0,
    marginTop: 0,
    padding: 1,
    paddingBottom: 0.5,
    paddingTop: 0.5,
    borderRadius: 2,
  };

  return (
    <List sx={{width: "100%", bgcolor: "background.paper"}} component='nav'>
      {SideNavigationList.map((data, i) => {
        return (
          <div key={uuidv4()} className='mb-2'>
            <ListItemButton
              onClick={() => data.setState(!data.currState)}
              sx={ListItemSettings}
            >
              <ListItemText primary={data.name} sx={{color: "#FB5533"}} />
              {data.currState ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={data.currState} timeout='auto' unmountOnExit>
              {data.list.map((listData, i) => CheckBoxes(listData, uuidv4()))}
            </Collapse>
          </div>
        );
      })}
    </List>
  );
}

function ShopStatus({shopname}) {
  return (
    <>
      <img src={ShopBg} className='rounded-lg w-72' />
      <div className='flex items-center mt-6 justify-between'>
        <div className='flex items-center'>
          <Storefront sx={{fontSize: "1.25rem"}} />
          <div className='mr-1 ml-1 text-Roboto'>{shopname}</div>
          <CheckCircle sx={{fontSize: "1.25rem", color: "#0091ea"}} />
        </div>
        <div className='flex items-center'>
          <Circle sx={{fontSize: "0.875rem", color: "#00c853"}} />
          <div className='ml-1 text-greenOnline'>Online</div>
        </div>
      </div>
      <div className='flex justify-between mt-6'>
        <Button
          variant='contained'
          startIcon={<Add />}
          sx={{
            textTransform: "none",
            borderRadius: 50,
            width: 1,
            marginRight: 2,
          }}
        >
          <Typography fontFamily={"Roboto"} fontSize={"0.875rem"}>
            Follow
          </Typography>
        </Button>
        <Button
          variant='outlined'
          endIcon={<Chat />}
          sx={{textTransform: "none", borderRadius: 50, width: 1}}
        >
          <Typography fontFamily={"Roboto"} fontSize={"0.875rem"}>
            Chat
          </Typography>
        </Button>
      </div>
    </>
  );
}

function ShopInformation() {
  return (
    <div
      className='p-8 m-4 bg-secondaryBgColor font-Roboto rounded-xl border-2 
    border-dividerColor shadow-md h-full'
    >
      <div className='flex'>
        <section className='mr-16 flex flex-col '>
          <div className='flex'>
            <Storefront />
            <div className='ml-2 mr-1'>Products:</div>
            <div className='text-happyBlue'>600</div>
          </div>
          <div className='flex mt-4 mb-4'>
            <Followers />
            <div className='ml-2 mr-1'>Followers:</div>
            <div className='text-happyBlue'>40.5K</div>
          </div>
          <div className='flex'>
            <Following />
            <div className='ml-2 mr-1'>Following:</div>
            <div className='text-happyBlue'>1.5K</div>
          </div>
        </section>

        <section>
          <div>
            <div className='flex'>
              <StarRate />
              <div className='ml-2 mr-1'>Rating:</div>
              <div className='text-secondaryTextColor'>
                <span className='text-happyBlue'>4.9</span> (30.2k reviews)
              </div>
            </div>
            <div className='flex mt-4 mb-4'>
              <Chat />
              <div className='ml-2 mr-1'>Chat performance:</div>
              <div className='text-secondaryTextColor'>
                <span className='text-happyBlue'>93%</span> (Within hours)
              </div>
            </div>
            <div className='flex'>
              <Join />
              <div className='ml-2 mr-1'>Joined:</div>
              <div className='text-happyBlue'>4 years ago</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ShopSocialMedia() {
  return (
    <div className='flex p-4 justify-around'>
      <div className='flex items-center cursor-pointer'>
        <img src={InstagramIcon} className='h-8 mr-2' />
        <div>@fourth_shop</div>
      </div>
      <div className='flex items-center cursor-pointer'>
        <img src={FacebookIcon} className='h-8 mr-2' />
        <div>fourthShop</div>
      </div>
      <div className='flex items-center cursor-pointer'>
        <img src={GoogleIcon} className='h-8 mr-2' />
        <div>fourthshop@gmail.com</div>
      </div>
    </div>
  );
}

// This is the list of products in the shop, it is categorized using tabs
function ProductTabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

ProductTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function ProductProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductTabs() {
  const ProductCategory = [
    "Home",
    "All Products",
    "Women's Shoes",
    "Men's Apparel",
    "Sports & Travel",
    "Women's Apparel",
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{borderBottom: 1, borderColor: "divider"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='product tabs'
          centered
        >
          {ProductCategory.map((data, i) => {
            return (
              <Tab
                label={<div className='font-Roboto text-base'>{data}</div>}
                {...ProductProps(i)}
                key={uuidv4()}
                sx={{textTransform: "none"}}
              />
            );
          })}
        </Tabs>
      </Box>
      {ProductCategory.map((data, i) => {
        return (
          <ProductTabPanel value={value} index={i} key={uuidv4()}>
            {data}
          </ProductTabPanel>
        );
      })}
    </Box>
  );
}

function AppBody({shopname}) {
  const [openCategory, setOpenCategory] = React.useState(true);
  const [openPrice, setOpenPrice] = React.useState(true);
  const [openLocation, setOpenLoc] = React.useState(true);
  const [openRating, setOpenRate] = React.useState(true);
  const [openShip, setOpenShip] = React.useState(true);
  const [openPayment, setOpenPayment] = React.useState(true);

  const CategoryList = [
    "Cleanser",
    "Toner",
    "Serum",
    "Moisturizer",
    "Face mask",
  ];
  const PriceList = ["High to low", "Low to high"];
  const LocationList = ["Nearest", "Farthest"];
  const RatingList = ["Highest", "Lowest"];
  const ShipList = ["Regular", "Next day", "Same day", "Instant"];
  const PaymentList = ["Card", "EWallet", "Cryptocurrency", "Cash on delivery"];

  const SideNavigationList = [
    {
      name: "Category",
      currState: openCategory,
      setState: setOpenCategory,
      list: CategoryList,
    },
    {
      name: "Price",
      currState: openPrice,
      setState: setOpenPrice,
      list: PriceList,
    },
    {
      name: "Location",
      currState: openLocation,
      setState: setOpenLoc,
      list: LocationList,
    },
    {
      name: "Rating",
      currState: openRating,
      setState: setOpenRate,
      list: RatingList,
    },
    {
      name: "Shipping",
      currState: openShip,
      setState: setOpenShip,
      list: ShipList,
    },
    {
      name: "Payment",
      currState: openPayment,
      setState: setOpenPayment,
      list: PaymentList,
    },
  ];

  return (
    <div className='w-full h-full flex'>
      {/* Side Navigation */}
      <section className='w-[260px] ml-4 mr-4 overflow-y-auto border-r-[1px] border-dividerColor'>
        <ShopSideCheckboxes SideNavigationList={SideNavigationList} />
      </section>

      {/* Main Content */}
      <section className='m-4 w-full'>
        <div className='flex m-4'>
          <div>Home</div>
          <ArrowRight />
          <div>Women Shoes</div>
          <ArrowRight />
          <div>{shopname}</div>
        </div>

        <div className='flex justify-center'>
          <section
            className='p-8 m-4 bg-secondaryBgColor font-Roboto rounded-xl 
            border-2 border-dividerColor shadow-md'
          >
            <ShopStatus shopname={shopname} />
          </section>
          <section className='flex flex-col'>
            <ShopInformation />

            <div
              className='m-4 bg-secondaryBgColor font-Roboto rounded-xl border-2
              border-dividerColor shadow-md'
            >
              <ShopSocialMedia />
            </div>
          </section>
        </div>

        <div>
          <ProductTabs />
        </div>
      </section>
    </div>
  );
}

export default function Shop() {
  const {shopname} = useParams();

  document.title = shopname;
  return (
    <div className='w-screen h-auto'>
      <TopAppBar />
      <AppBody shopname={shopname} />
    </div>
  );
}
