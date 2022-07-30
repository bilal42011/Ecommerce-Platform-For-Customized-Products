import React from 'react'
// import {SwiperSlide} from "swiper/react";
// import SellerProfile from "./SellerProfile/SellerProfile"
import safwan from "../../../../assets/safwan.webp";

export let topSellers=[
    {
        id:"1",
        avatarSrc:safwan,
        name:"Safwan Karim",
        ratings:4.5,
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id:"2",
        avatarSrc:safwan,
        name:"Safwan Karim",
        ratings:4.5,
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id:"3",
        avatarSrc:safwan,
        name:"Safwan Karim",
        ratings:4.5,
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id:"4",
        avatarSrc:safwan,
        name:"Safwan Karim",
        ratings:4.5,
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id:"5",
        avatarSrc:safwan,
        name:"Safwan Karim",
        ratings:4.5,
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id:"6",
        avatarSrc:safwan,
        name:"Safwan Karim",
        ratings:4.5,
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]


const SellersProfiles = () => {
  return (

    <>
    {/* {
        topSellers.map((seller)=>{

return <SwiperSlide key={seller.id}>
<SellerProfile avatarSrc={seller.avatarSrc} name={seller.name} 
ratings={seller.ratings} description={seller.description} />
</SwiperSlide>

        })
    } */}
    </>
  )
}

export default SellersProfiles;