import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
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
import CategoryChooser from "./CategoryChooser";
import FileChooser from "./FileChooser";
import OverlaySpinner from "./OverlaySpinner";
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
  buttonLabel = "Creat Product",
  formTitle = "Create a new Product",
  hideFileChooser,
}) {
  const [product, setProduct] = useState(
    propsProduct || {
      title: "",
      description: "",
      category: "",
      images: [],
      hasSizes: false,
      price: 1,
      quantity: 1,
    }
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set("hasSizes", product.hasSizes);
    onSubmit && onSubmit(formData, product);
  };

  const gridControlParams = {
    item: true,
    xs: 12,
    sm: 8,
  };

  return (
    <Card
      component="form"
      sx={{ maxWidth: "md", m: "auto", position: "relative" }}
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
            name="title"
            label="Product Title"
            value={product.title}
            onChange={(e) =>
              setProduct((old) => {
                return { ...old, title: e.target.value };
              })
            }
          />
        </Grid>
        <GridLabel>Product Category</GridLabel>
        <Grid {...gridControlParams}>
          <CategoryChooser
            name="category"
            value={product.category}
            hideLabel
            required
            onChange={(e) =>
              setProduct((old) => {
                return { ...old, category: e.target.value };
              })
            }
          />
        </Grid>
        <GridLabel sx={{ alignSelf: "flex-start" }}>
          Product Description
        </GridLabel>
        <Grid {...gridControlParams}>
          <TextField
            fullWidth
            required
            name="description"
            label="Description"
            multiline
            rows={4}
            value={product.description}
            onChange={(e) =>
              setProduct((old) => {
                return { ...old, description: e.target.value };
              })
            }
          />
        </Grid>
        <GridLabel>Has Sizes</GridLabel>
        <Grid {...gridControlParams}>
          <Stack direction="row">
            <Checkbox
              name="hasSizes"
              checked={product.hasSizes}
              onChange={(e) =>
                setProduct((old) => ({ ...old, hasSizes: e.target.checked }))
              }
            />
          </Stack>
        </Grid>
        {hideFileChooser || (
          <>
            <GridLabel>Images</GridLabel>
            <Grid {...gridControlParams}>
              <FileChooser
                name="images"
                value={product.images}
                onChange={(e) =>
                  setProduct((old) => {
                    return { ...old, images: [...e.target.files] };
                  })
                }
                accept="image/*"
                required
              />
            </Grid>
          </>
        )}
        <GridLabel>Price</GridLabel>
        <Grid {...gridControlParams}>
          <TextField
            fullWidth
            name="price"
            required
            sx={{ flex: 2 }}
            type={"number"}
            inputMode="numeric"
            value={product.price}
            onChange={(e) =>
              setProduct((old) => {
                return { ...old, price: parseInt(e.target.value) };
              })
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
            name="quantity"
            required
            value={product.quantity}
            onChange={(e) =>
              setProduct((old) => {
                return { ...old, quantity: e };
              })
            }
            label="Product Quantity"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth required variant="contained">
            {buttonLabel}
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
