import React from 'react'
import {Grid,Avatar,Typography,Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const SellerProfile = ({avatarSrc,name,ratings,description}) => {

  return (
<Grid container sx={{p:3.5,border:"1px solid #808080",borderRadius:"8px"
,paddingBottom:"-20px",backgroundColor:"white"}} 
rowSpacing={2} alignItems="center" direction="column"  justifyContent="center">
    
    <Grid item >
    <Avatar sx={{width:120, height:120}} src={avatarSrc}/>
    </Grid>
    
    <Grid item >
    <Typography fontFamily="Roboto Condensed, sans-serif" variant="p" fontWeight="bold" fontSize="24px">
        {name}
    </Typography>
    </Grid>
    
    <Grid container item alignItems="center" justifyContent="center" columnSpacing={0.5} >
<Grid item>
<Rating name="half-rating-read"
 readOnly value={ratings}
 precision={0.5}
  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" 
size="medium"/>} />
</Grid>
<Grid item >
<Typography variant="p" fontFamily="Roboto , sans-serif" 
fontWeight="bolder" fontSize="17px">
    {`(${ratings})`}
</Typography>
</Grid>
    </Grid>

<Grid item>
<Typography variant="body1" fontFamily="Roboto , sans-serif" textAlign="center" fontSize="21px" color="#666666">
{description}
</Typography>
</Grid>

    </Grid>    

  )
}

export default SellerProfile;