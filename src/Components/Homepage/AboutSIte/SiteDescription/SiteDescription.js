import React from 'react'
import {Grid,Typography} from "@mui/material";
import Service from './Service/Service';



let servicesData=[
{
    id:"1",
    serviceTitle:"The best for every budget",
    serviceDescription:"Find high-quality services at every price point. No hourly rates, just project-based pricing.",
},
{
    id:"2",
    serviceTitle:"Quality work done quickly",
    serviceDescription:"Find the right Seller to begin working on your project within minutes.",
},
{
    id:"3",
    serviceTitle:"Protected payments, every time",
    serviceDescription:"Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
},
{
    id:"4",
    serviceTitle:"24/7 support",
    serviceDescription:"Questions? Our round-the-clock support team is available to help anytime, anywhere.",
},
]

const SiteDescription = () => {
  return (
    <Grid container item xs={12} md={5} lg={4} justifyContent="center"  rowSpacing={4}>

<Grid item xs={12}>
    <Typography variant="p"  fontFamily="Roboto Condensed, sans-serif" fontWeight="700" fontSize="40px">
    A Whole World of Talent at Your Fingertips
    </Typography>
</Grid>

<Grid container item xs={11} direction="column" rowSpacing={4} >
{
    servicesData.map((service)=>{
return <Service key={service.id} 
serviceTitle={service.serviceTitle} 
serviceDescription={service.serviceDescription} />
    })
}

</Grid>

</Grid>
  )
}

export default SiteDescription