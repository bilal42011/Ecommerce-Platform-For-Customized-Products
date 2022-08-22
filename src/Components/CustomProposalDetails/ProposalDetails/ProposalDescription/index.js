import React from "react";
import {
  Stack,
  Paper as Item,
  Typography,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import Attachments from "../../../Attachments";
import UsersActions from "../../../CustomRequestProposals/ProposalsDataGrid/ProposalsDataGrid/UsersActions";
import { useNavigate } from "react-router-dom";

// const proposal = {
//   _id: 1,
//   photoURL: avatarImage,
//   name: "Bilal Malik",
//   price: 400,
//   location: "Rawalpindi",
//   timeline: 15,
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis ac eros eu blandit. Aenean ultrices consectetur ligula, elementum interdum elit sagittis eget. Vestibulum in est tempor, convallis lectus sit amet, tempus ipsum. Sed a purus sit amet risus aliquet fermentum sit amet vitae dolor. Praesent a molestie neque, eget feugiat dui. In quis augue erat. Phasellus tempor ornare ante, vel lacinia velit iaculis eu. Curabitur id lectus mollis, ultrices neque at, pharetra nisi. Quisque congue neque elit, vitae semper purus commodo eget. Praesent eu lorem in neque volutpat pretium sit amet nec mauris.Nullam ut gravida nisl. Nunc fermentum tincidunt commodo. Nam a erat vitae orci placerat luctus eget at elit. Nam scelerisque pellentesque fermentum. Morbi tristique rhoncus porttitor. Donec nisi ante, semper id velit ac, molestie interdum erat. Sed ac urna mauris. Suspendisse egestas nulla nec tellus varius pulvinar. Morbi cursus nibh in massa luctus facilisis. Nunc bibendum dapibus sem quis molestie. Sed eu commodo est. Quisque maximus porta rhoncus.",
// };

const ProposalDescription = ({ proposal, request, hideActions }) => {
  const navigate = useNavigate();
  const disableUserActions =
    proposal.status !== "PENDING" && proposal.buyerRequestId?.status !== "OPEN";

  return (
    <Stack
      justifyContent="center"
      component={Paper}
      variant="outlined"
      spacing={2}
      sx={{ paddingX: 5, paddingY: 4 }}
    >
      <Item
        sx={{ paddingBottom: 1, borderTop: "2px" }}
        align="center"
        variant="none"
      >
        <Typography
          variant="h3"
          color="rgba(0, 0, 0, 0.87)"
          fontSize="2.5rem"
          sx={{ fontWeight: "900" }}
        >
          Proposal Description
        </Typography>
      </Item>
      <Divider />
      <Stack direction="row" justifyContent="center" sx={{ pt: 2 }} spacing={4}>
        <Typography
          sx={{
            backgroundColor: "purple",
            p: 1,
            color: "white",
            borderRadius: 1,
          }}
        >{`Price:  Rs. ${proposal.budget.toLocaleString()} /-`}</Typography>

        <Typography
          sx={{
            backgroundColor: "purple",
            p: 1,
            color: "white",
            borderRadius: 1,
          }}
        >
          Timeline: {proposal.deliveryTime} Days
        </Typography>
      </Stack>
      <Stack spacing={2.5} sx={{ pt: 2 }}>
        <Typography variant="h4" color="rgba(0, 0, 0, 0.87)" fontWeight="bold">
          Description
        </Typography>
        <Typography textAlign="justify" color="rgba(0, 0, 0, 0.87)">
          {proposal.coverLetter}
        </Typography>
      </Stack>
      <Attachments files={proposal.attachments} />
      {hideActions || (
        <UsersActions
          disabled={disableUserActions}
          onProposalStateChange={(_) => navigate("../")}
        />
      )}
    </Stack>
  );
};

export default ProposalDescription;
