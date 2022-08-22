import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Stack } from "@mui/material";
import axiosInstance, { endPoints } from "../../../../../axiosInstance";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OverlaySpinner from "../../../../OverlaySpinner";

const UsersActions = ({ disabled, onProposalStateChange }) => {
  const { proposalId, requestId } = useParams();
  const token = useSelector((state) => state.auth.user?.token);

  const [formBusy, setFormBusy] = useState(false);

  const onAcceptProposal = async () => {
    setFormBusy(true);
    try {
      const response = await axiosInstance.get(
        `${endPoints.BUYER_REQUEST}/${requestId}/${endPoints.PROPOSALS}/${proposalId}/accept`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onProposalStateChange && onProposalStateChange(response.data.proposal);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setFormBusy(false);
  };

  const onRejectProposal = async () => {
    setFormBusy(true);
    try {
      const response = await axiosInstance.get(
        `${endPoints.BUYER_REQUEST}/${requestId}/${endPoints.PROPOSALS}/${proposalId}/decline`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onProposalStateChange && onProposalStateChange(response.data.proposal);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setFormBusy(false);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      position="relative"
    >
      <Button
        variant="contained"
        size="medium"
        disableElevation
        disabled={disabled}
        sx={{
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "rgb(255, 0, 0,0.75)",
          },
        }}
        startIcon={<CancelIcon />}
        onClick={onRejectProposal}
      >
        Decline
      </Button>
      <Button
        variant="contained"
        disableElevation
        disabled={disabled}
        size="medium"
        sx={{
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "rgb(0, 128, 0,0.75)",
          },
        }}
        startIcon={<CheckCircleIcon />}
        onClick={onAcceptProposal}
      >
        Accept
      </Button>
      {formBusy && <OverlaySpinner />}
    </Stack>
  );
};

export default UsersActions;
