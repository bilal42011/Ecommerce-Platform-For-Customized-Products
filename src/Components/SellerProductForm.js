import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import FileChooser from "./FileChooser";
import QuantityInput from "./QuantityInput/QuantityInput";

const GridLabel = ({ children, ...props }) => {
  return (
    <Grid item xs={12} sm={4} {...props}>
      <Typography>{children}</Typography>
    </Grid>
  );
};

export default function SellerProductForm({
  product: propsProduct,
  onSubmit,
  formTitle = "Create a new Product",
}) {
  const [product, setProduct] = useState(
    propsProduct || {
      title: "",
      description: "",
      category: "",
      images: [],
      sizes: [],
      price: 1,
      quantity: 1,
    }
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    onSubmit(product);
  };

  const gridControlParams = {
    item: true,
    xs: 12,
    sm: 8,
  };

  return (
    <Card
      component="form"
      sx={{ maxWidth: "md", m: "auto" }}
      onSubmit={onFormSubmit}
    >
      <CardHeader title={formTitle} />
      <Divider />
      <CardContent component={Grid} container spacing={2} alignItems="center">
        <GridLabel>Product Name</GridLabel>

        <Grid {...gridControlParams}>
          <TextField
            fullWidth
            required
            label="Product Title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </Grid>
        <GridLabel>Product Category</GridLabel>
        <Grid {...gridControlParams}>
          <FormControl sx={{ flex: 2 }} fullWidth required>
            <InputLabel id="city-chooser-label">Product Category</InputLabel>
            <Select
              labelId="city-chooser-label"
              id="city-chooser"
              value={product.category}
              label="Choose Category"
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              fullWidth
              required
            >
              <MenuItem value={"Wood Works"}>Wood Works</MenuItem>
              <MenuItem value={"Iron Works"}>Iron Works</MenuItem>
              <MenuItem value={"Grocerry"}>Grocerry</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <GridLabel sx={{ alignSelf: "flex-start" }}>
          Product Description
        </GridLabel>
        <Grid {...gridControlParams}>
          <TextField
            fullWidth
            required
            label="Description"
            multiline
            rows={4}
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </Grid>
        <GridLabel>Has Sizes</GridLabel>
        <Grid {...gridControlParams}>
          <Stack direction="row">
            <Checkbox />
          </Stack>
        </Grid>

        <GridLabel>Images</GridLabel>
        <Grid {...gridControlParams}>
          <FileChooser
            value={product.images}
            onChange={(e) =>
              setProduct({ ...product, images: [...e.target.files] })
            }
            accept="image/*"
            required
          />
        </Grid>
        <GridLabel>Price</GridLabel>
        <Grid {...gridControlParams}>
          <TextField
            fullWidth
            required
            sx={{ flex: 2 }}
            type={"number"}
            inputMode="numeric"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: e.target.value * 1 })
            }
            inputProps={{
              min: 1,
            }}
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1 }}>Rs. </Typography>,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <QuantityInput
            required
            value={product.quantity}
            onChange={(e) => setProduct({ ...product, quantity: e })}
            label="Product Quantity"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth required variant="contained">
            Create Product
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
