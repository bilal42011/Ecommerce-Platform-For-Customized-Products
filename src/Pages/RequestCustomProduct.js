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
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useState } from "react";
import CategoryChooser from "../components/CategoryChooser";
import QuantityInput from "../components/QuantityInput/QuantityInput";

export default function RequestCustomProduct() {
  const [formData, setFormData] = useState({
    description: "",
    files: [],
    category: "",
    deliveryTime: 1,
    budget: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card
      sx={{ maxWidth: "md", margin: "auto" }}
      component="form"
      onSubmit={onSubmit}
    >
      <CardHeader
        title="Which Product Are You Looking For?"
        subheader="Describe the service you're looking to purchase - please be as detailed as possible"
      />
      <CardContent>
        <Stack spacing={2}>
          <TextField
            multiline
            label="I am looking for..."
            fullWidth
            rows={6}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <Stack
            direction={"row"}
            component="label"
            alignItems="center"
            htmlFor="attachments-button"
            sx={{ position: "relative" }}
          >
            <Button variant="outlined" sx={{ maxWidth: "sm" }}>
              Attach Files
              <AttachFileIcon />
            </Button>
            {formData.files.map((e, i) => (
              <Typography key={i} variant="caption" ml={1}>
                {e.name},
              </Typography>
            ))}
            <input
              accept="*"
              id="attachments-button"
              multiple
              type="file"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
              }}
              onChange={(e) =>
                setFormData({ ...formData, files: [...e.target.files] })
              }
            />
          </Stack>
          <CategoryChooser
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
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
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
