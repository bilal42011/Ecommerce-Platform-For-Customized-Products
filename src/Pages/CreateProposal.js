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
import FileChooser from "../Components/FileChooser";
import QuantityInput from "../Components/QuantityInput/QuantityInput";

export default function CreateProposal() {
  const [formData, setFormData] = useState({
    description: "",
    files: [],
    deliveryTime: 1,
    budget: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <Card
        sx={{ maxWidth: "md", margin: "auto", mt: 15 }}
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
              rows={6}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <FileChooser
              value={formData.files}
              onChange={(e) =>
                setFormData({ ...formData, files: [...e.target.files] })
              }
              accept="*"
            />
            <QuantityInput
              label="Delivery Time"
              value={formData.deliveryTime}
              onChange={(e) => setFormData({ ...formData, deliveryTime: e })}
            />
            <Stack direction="row" alignItems="center">
              <Typography flex={1}>Budget</Typography>
              <TextField
                sx={{ flex: 2 }}
                type={"number"}
                inputMode="numeric"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value * 1 })
                }
                inputProps={{
                  min: 0,
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
      </Card>
    </Container>
  );
}
