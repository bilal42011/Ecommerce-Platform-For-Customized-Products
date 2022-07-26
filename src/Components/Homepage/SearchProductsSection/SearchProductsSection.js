import React, { useState } from "react"; 
import {Grid,Typography,OutlinedInput,Button} from "@mui/material";
import ArtImage from "../../../assets/ArtImage.png";
import styled from "@mui/material/styles/styled";
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";


const StyledTextField = styled(OutlinedInput)({
    
"& .MuiOutlinedInput-input":{
color:"white",
fontFamily:'Roboto, sans-serif'
},
    '& .MuiOutlinedInput-notchedOutline ': {
      border:"1px solid white"
    },
      "&:hover":{ 
      "& .MuiOutlinedInput-notchedOutline": {
        border:"2px solid white",
      }   
    },
      "&.Mui-focused": {
        
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: 'yellow',
          }
      },
}  );

const SearchProductsSection=()=>{

const theme=useTheme();
let isSmallScreen=!useMediaQuery(theme.breakpoints.up('sm'));
console.log(isSmallScreen);
    let [searchvalue,setsearchvalue]=useState("");
console.log(searchvalue);

const onChangeHandler=(event)=>{
    setsearchvalue(event.target.value);
}

const onSearchHandler=()=>{
console.log("Form Submitted");
}

return <Grid container sx={{background:`url(${ArtImage})`,height:"580px"}} justifyContent="center" alignContent="center">
<Grid container item alignContent="center" justifyContent="center" 
xs={11} sm={11} md={10} lg={10} xl={10} sx={{height:"500px",backgroundColor:"rgb(0,0,0,0.5)"}} rowSpacing={isSmallScreen? 3: 0}>
<Grid item xs={10}>
    <Typography variant="p" sx={{color:"white",fontSize:"2.7rem"
    ,fontFamily:"Roboto, sans-serif",fontWeight:"lighter"}}>Find the perfect products</Typography>
</Grid>
<Grid container item xs={10} justifyContent={isSmallScreen?"start":"center"}
 alignItems="center" columnSpacing={isSmallScreen? 0:1}  component="form" onSubmit={onSearchHandler} >
<Grid item xs={12} sm={10}>
<StyledTextField placeholder="Search Products" fullWidth  color="secondary"
onChange={onChangeHandler} 
value={searchvalue} required/>
</Grid>
<Grid item xs={6} sm={2}>
<Button variant="contained" type="submit"
 sx={{my:2,fontFamily:'Roboto, sans-serif',fontWeight:"bold",p:2}}>Search</Button>
</Grid>
</Grid>
</Grid>
</Grid>
}

export default SearchProductsSection;