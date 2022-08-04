import React from 'react';
import {Stack,Paper as Item,Typography,Divider} from "@mui/material";
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
    <Stack justifyContent="center" spacing={2}>
<Item sx={{paddingBottom:1,borderTop:"2px"}} align="center" variant="none">
    <Typography variant="h3" color="rgba(0, 0, 0, 0.87)"
     fontSize="2.5rem" fontFamily="Roboto,Helvetica,Arial,sans-serif" sx={{fontWeight:"900"}}>
        Proposal Description
    </Typography>
</Item>
<Divider />
<Stack direction="row" justifyContent="center" sx={{paddingTop:2}} spacing={4}>
<Item sx={{backgroundColor:"#1976d2",padding:1,color:"white",fontFamily:"Roboto, sans-serif"}}>
  <Typography>
    {`Price:  ${proposalData.price}`}
  </Typography>
</Item>
<Item sx={{backgroundColor:"#1976d2",padding:1,color:"white",fontFamily:"Roboto, sans-serif"}}>
<Typography>
    {`Timeline:  ${proposalData.timeline}`}
  </Typography>
</Item>
</Stack>
<Stack spacing={2.5} sx={{pt:2}}>
  <Typography variant="h4" color="rgba(0, 0, 0, 0.87)"
   fontWeight="bold" fontFamily="Roboto,Helvetica,Arial,sans-serif">
    Description
  </Typography>
  <Typography textAlign="justify">
  {proposalData.description}
  </Typography>
</Stack>
    </Stack>
  )
}

export default ProposalDescription