import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ProductCard from "./ProductCard";

export default function SearchResults({ results }) {
  return (
    <Box sx={{ mt: 2 }}>
      {results ? (
        <Grid container spacing={1}>
          {results.map((item, index) => {
            return (
              <Grid item key={index} xs={12} md={3}>
                <ProductCard product={item} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <CircularProgress sx={{ margin: "auto" }} />
      )}
    </Box>
  );
}
