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
import { useState } from "react";
import CategoryChooser from "../Components/CategoryChooser";
import QuantityInput from "../Components/QuantityInput/QuantityInput";
import FileChooser from "../Components/FileChooser";

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
      sx={{ maxWidth: "md", margin: "auto", mt: 15 }}
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
          <FileChooser
            value={formData.files}
            onChange={(e) =>
              setFormData({ ...formData, files: [...e.target.files] })
            }
            accept="*"
          />
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
