import React from 'react';
import {Container,Grid,Typography} from "@mui/material";
import CategoriesItems from './CategoriesItems/CategoriesItems';


const Categories = () => {
  return (
    <Container width="xl" sx={{paddingTop:"2rem"
    ,marginTop:{xs:"3rem",sm:"4rem",md:"6rem"}}}>
<Typography variant="h3" fontFamily='Roboto Condensed, sans-serif'
 textAlign="center" fontWeight="bolder" fontSize="3rem" sx={{color:"rgb(6, 21, 34)"}}>
    Explore the Market Place</Typography>

<Grid container columnSpacing={2} rowSpacing={6} justifyContent="center" sx={{marginTop:"3rem"}}>
<CategoriesItems />
</Grid>

</Container>
  )
}

export default Categories;