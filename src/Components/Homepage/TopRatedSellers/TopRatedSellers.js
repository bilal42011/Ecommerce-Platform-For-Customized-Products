import React from 'react'
import {Typography,Container} from '@mui/material';
import SellersSlider from './SellersSlider/SellersSlider'; 



const TopRatedSellers = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" fontFamily='Roboto Condensed, sans-serif' sx={{textAlign:"center"}}>
Top Rated Sellers
      </Typography>
    <SellersSlider />
    </Container>
  )
}

export default TopRatedSellers;