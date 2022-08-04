import React from 'react';
import {Grid} from "@mui/material";
import SellerProfileDescription from '../../SellerProfileDescription';
import avatarImage from "../../../assets/bilal.jpg"
import ProposalDescription from './ProposalDescription/ProposalDescription';


const userDetail = {
  username: "username",
  full_name: "Muhammad Bilal Malik",
  aggregated_rating: 5,
  total_reviews: 125,
  avatar: avatarImage,
  // avatar: "",
  city: "Islamabad",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const ProposalDetails = () => {
  return (
    <Grid container justifyContent="center" columnSpacing={4} rowSpacing={4}>
<Grid item xs={12} md={7} 
sx={{paddingTop:4,border:"1px solid rgba(0, 0, 0, 0.12)"}}>
<ProposalDescription />
</Grid>
<Grid item xs={12} md={3.5}>
<SellerProfileDescription user={userDetail}/>
</Grid>

    </Grid>
  )
}

export default ProposalDetails;