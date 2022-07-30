import React, { useState } from 'react'
import {Grid,Button,OutlinedInput} from "@mui/material";
import styled from "@mui/material/styles/styled";


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
                borderColor: 'RGB(29, 191, 115)',
              }
          },
    }  );


const SearchInput = ({isSmallScreen}) => {

    let [searchvalue,setsearchvalue]=useState("");
console.log(searchvalue);

const onChangeHandler=(event)=>{
    setsearchvalue(event.target.value);
}

const onSearchHandler=()=>{
console.log("Form Submitted");
}


  return (
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
  )
}

export default SearchInput