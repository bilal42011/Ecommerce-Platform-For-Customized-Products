import React from 'react';
import {Stack,Paper as Item,Typography,Divider,Button} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import avatarImage from "../../../../assets/bilal.jpg";


const proposalData={
        _id:1,
        username:"bilal50081",
        photoURL:avatarImage,
        name:"Bilal Malik",
        price:400,
        location:"Rawalpindi",
        timeline:15,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis ac eros eu blandit. Aenean ultrices consectetur ligula, elementum interdum elit sagittis eget. Vestibulum in est tempor, convallis lectus sit amet, tempus ipsum. Sed a purus sit amet risus aliquet fermentum sit amet vitae dolor. Praesent a molestie neque, eget feugiat dui. In quis augue erat. Phasellus tempor ornare ante, vel lacinia velit iaculis eu. Curabitur id lectus mollis, ultrices neque at, pharetra nisi. Quisque congue neque elit, vitae semper purus commodo eget. Praesent eu lorem in neque volutpat pretium sit amet nec mauris.Nullam ut gravida nisl. Nunc fermentum tincidunt commodo. Nam a erat vitae orci placerat luctus eget at elit. Nam scelerisque pellentesque fermentum. Morbi tristique rhoncus porttitor. Donec nisi ante, semper id velit ac, molestie interdum erat. Sed ac urna mauris. Suspendisse egestas nulla nec tellus varius pulvinar. Morbi cursus nibh in massa luctus facilisis. Nunc bibendum dapibus sem quis molestie. Sed eu commodo est. Quisque maximus porta rhoncus."
}

const ProposalDescription = () => {
  return (
    <Stack justifyContent="center" spacing={2} sx={{paddingX:5}}>
<Item sx={{paddingBottom:1,borderTop:"2px"}} align="center" variant="none">
    <Typography variant="h3" color="rgba(0, 0, 0, 0.87)"
     fontSize="2.5rem" fontFamily="Roboto,Helvetica,Arial,sans-serif" sx={{fontWeight:"900"}}>
        Proposal Description
    </Typography>
</Item>
<Divider />
<Stack direction="row" justifyContent="center" sx={{pt:2}} spacing={4}>
<Item sx={{backgroundColor:"gray",p:1,color:"white",fontFamily:"Roboto, sans-serif"}}>
  <Typography fontFamily="Roboto, sans-serif">
    {`Price:  ${proposalData.price}`}
  </Typography>
</Item>
<Item sx={{backgroundColor:"gray",p:1,color:"white",fontFamily:"Roboto, sans-serif"}}>
<Typography fontFamily="Roboto, sans-serif">
    {`Timeline:  ${proposalData.timeline}`}
  </Typography>
</Item>
</Stack>
<Stack spacing={2.5} sx={{pt:2}}>
  <Typography variant="h4" color="rgba(0, 0, 0, 0.87)"
   fontWeight="bold" fontFamily="Roboto,Helvetica,Arial,sans-serif">
    Description
  </Typography>
  <Typography textAlign="justify" color="rgba(0, 0, 0, 0.87)">
  {proposalData.description}
  </Typography>
</Stack>

<Stack direction="row" spacing={2} justifyContent="center" sx={{pt:2.5}}>
    <Button variant='contained'
    size="large"
    disableElevation
    sx={{backgroundColor:"red",
"&:hover":{

backgroundColor:"rgb(255, 0, 0,0.75)"

}}}
     startIcon={<CancelIcon />}>Decline</Button>
    <Button variant='contained'
    disableElevation
    size="large"
    sx={{backgroundColor:"green",
    "&:hover":{

        backgroundColor:"rgb(0, 128, 0,0.75)"
        
        }}}
     startIcon={<CheckCircleIcon />}>Accept</Button>
    </Stack>

    </Stack>
  )
}

export default ProposalDescription