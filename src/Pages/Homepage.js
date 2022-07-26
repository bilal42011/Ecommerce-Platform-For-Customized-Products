import React from "react"; 
import {Container} from "@mui/material";
import SearchProductsSection from "../Components/Homepage/SearchProductsSection/SearchProductsSection";
import TopRatedSellers from "../Components/Homepage/TopRatedSellers/TopRatedSellers";

const Homepage=()=>{

    return <Container maxWidth="xl" disableGutters>
<SearchProductsSection />
<TopRatedSellers />
    </Container>
}

export default Homepage;