import { Grid } from "@mui/material";
import SellerProfileDescription from "../../SellerProfileDescription";
import ProposalDescription from "./ProposalDescription";

import OverlaySpinner from "../../OverlaySpinner";

const ProposalDetails = ({ proposal, hideActions }) => {
  return (
    <Grid container spacing={1} maxWidth="100%">
      <Grid item xs={12} md={8} sx={{ paddingLeft: "0 !important" }}>
        <ProposalDescription
          proposal={proposal || {}}
          hideActions={hideActions}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SellerProfileDescription user={proposal ? proposal.sellerId : {}} />
      </Grid>
      {!proposal && <OverlaySpinner />}
    </Grid>
  );
};

export default ProposalDetails;
