import { Grid } from "@mui/material";
import SellerProfileDescription from "../../SellerProfileDescription";
import ProposalDescription from "./ProposalDescription";

import OverlaySpinner from "../../OverlaySpinner";

// const userDetail = {
//   username: "username",
//   full_name: "Muhammad Bilal Malik",
//   aggregated_rating: 5,
//   total_reviews: 125,
//   avatar: avatarImage,
//   // avatar: "",
//   city: "Islamabad",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// };

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
