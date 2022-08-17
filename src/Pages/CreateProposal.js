import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance, { endPoints, getToken } from "../axiosInstance";
import FileChooser from "../Components/FileChooser";
import OverlaySpinner from "../Components/OverlaySpinner";
import QuantityInput from "../Components/QuantityInput/QuantityInput";

export default function CreateProposal() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const [formBusy, setFormBusy] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    files: [],
    deliveryTime: 1,
    budget: 1,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormBusy(true);
    const formDataObj = new FormData(e.target);
    try {
      const response = await axiosInstance.post(
        `${endPoints.BUYER_REQUEST}/${requestId}/${endPoints.PROPOSALS}`,
        formDataObj,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      console.log(response.data);

      alert("Proposal successfully sent");
      navigate("/profile/buyers-requests");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    setFormBusy(false);
  };
  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Card
        sx={{ maxWidth: "md", margin: "auto", mt: 15, position: "relative" }}
        component="form"
        onSubmit={onSubmit}
      >
        <CardHeader
          title="Cover Letter"
          subheader="Describe your services - please be as detailed as possible"
        />

        <CardContent>
          <Stack spacing={2}>
            <TextField
              multiline
              label="Cover letter..."
              fullWidth
              name="coverLetter"
              rows={6}
              value={formData.description}
              required
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <FileChooser
              value={formData.files}
              onChange={(e) =>
                setFormData({ ...formData, files: [...e.target.files] })
              }
              name="files"
              accept="*"
            />
            <QuantityInput
              name="deliveryTime"
              label="Delivery Time"
              value={formData.deliveryTime}
              onChange={(e) => setFormData({ ...formData, deliveryTime: e })}
            />
            <Stack direction="row" alignItems="center">
              <Typography flex={1}>Budget</Typography>
              <TextField
                name="budget"
                sx={{ flex: 2 }}
                type={"number"}
                inputMode="numeric"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value * 1 })
                }
                inputProps={{
                  min: 1,
                }}
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>Rs. </Typography>,
                }}
              ></TextField>
            </Stack>
          </Stack>
        </CardContent>

        <CardActions>
          <Button type="submit" variant="contained" fullWidth>
            Send Proposal
          </Button>
        </CardActions>
        {formBusy && <OverlaySpinner />}
      </Card>
    </Container>
  );
}
