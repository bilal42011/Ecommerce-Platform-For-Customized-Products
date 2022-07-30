import React from 'react'
import {Grid,Container} from "@mui/material";
import SiteDescription from './SiteDescription/SiteDescription';
import IronWorks from "../../../assets/IronWorks.png";

const AboutSite = () => {
  return (
<Container maxWidth="xl" sx={{marginTop:{xs:"3rem",sm:"4rem",md:"6rem"}
,backgroundColor:"#c5c6c9",paddingTop:{xs:"4rem",md:"8rem"},paddingBottom:{xs:"4rem",md:"8rem"}}} >
<Grid container rowSpacing={5} justifyContent="space-between" >
<SiteDescription/>
<Grid item xs={12} md={6} alignSelf="center">
    <img src={IronWorks} style={{width:"100%",display:"block",borderRadius:"10px"}} alt="Iron Works"/>
</Grid>
</Grid>
</Container>
  )
}

export default AboutSite