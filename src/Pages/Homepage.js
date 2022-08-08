import React from "react";
import { Container } from "@mui/material";
import SearchProductsSection from "../Components/Homepage/SearchProductsSection/SearchProductsSection";
import TopRatedSellers from "../Components/Homepage/TopRatedSellers/TopRatedSellers";
import AboutSite from "../Components/Homepage/AboutSIte/AboutSite";
import Categories from "../Components/Homepage/Categories/Categories";
import { useSelector,useDispatch } from "react-redux/";
import {reset} from "../Store/Slices/authSlice/authSlice";
import { register } from "../Store/Slices/authSlice/authSlice";


const Homepage = () => {
  let dispatch=useDispatch();
const clickHandler=()=>dispatch(register());

let auth=useSelector((state)=>state.auth);
console.log(auth);

  return (
    <Container maxWidth="100%" disableGutters>
      <button onClick={clickHandler}>Click Me</button>
      <SearchProductsSection />
      <TopRatedSellers />
      <AboutSite />
      <Categories />
    </Container>
  );
};

export default Homepage;
