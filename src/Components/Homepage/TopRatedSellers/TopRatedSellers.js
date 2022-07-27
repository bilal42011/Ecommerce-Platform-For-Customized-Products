import React from 'react'
import {Typography,Container} from '@mui/material';
import SellersSlider from './SellersSlider/SellersSlider'; 



const TopRatedSellers = () => {
  return (
    <Container maxWidth="xl" sx={{paddingTop:"3rem",backgroundColor:"#0d084d",marginTop:"6rem"}}>
      <Typography variant="h3" fontFamily='Roboto sans-serif' textAlign="center" color="white" fontWeight="bold">
<span style={{paddingBottom:"8px",borderBottom:"2px solid white"}}>Top Rated Sellers</span>
      </Typography>
    <SellersSlider />
    </Container>
  )
}

export default TopRatedSellers;