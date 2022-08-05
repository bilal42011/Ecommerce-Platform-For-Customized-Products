import React from 'react';
import {Container} from "@mui/material";
import ProposalDetails from '../Components/CustomProposalDetails/ProposalDetails/ProposalDetails';


const CustomProposalDetails = () => {
  return (
    <Container maxWidth="100%" disableGutters sx={{mt:15}}>
    <ProposalDetails/>
    </Container>
  )
}

export default CustomProposalDetails;