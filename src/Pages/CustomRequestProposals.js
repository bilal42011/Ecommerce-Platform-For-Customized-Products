import React from 'react';
import {Container} from "@mui/material";
import ProposalsDataGrid from '../Components/CustomRequestProposals/PoposalsDataGrid/ProposalsDataGrid/ProposalsDataGrid';


const CustomRequestProposals = () => {
  return (
    <Container maxWidth="100%" disableGutters>
    <ProposalsDataGrid />
    </Container>
  )
}

export default CustomRequestProposals;