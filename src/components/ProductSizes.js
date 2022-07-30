import { Chip, FormControl, FormLabel, RadioGroup } from "@mui/material";
import { useState } from "react";

export default function ProductSizes({ sizes }) {
  const [size, setSize] = useState(sizes[0]);

  return (
    <FormControl sx={{ flexDirection: "row", alignItems: "center" }}>
      <FormLabel sx={{ mr: 2 }}>Size</FormLabel>
      <RadioGroup sx={{ flexDirection: "row", flexWrap: "wrap" }} value={size}>
        {sizes.map((i) => {
          return (
            <Chip
              variant={size === i ? "filled" : "outlined"}
              sx={{ mx: 1 }}
              label={i}
              onClick={() => setSize(i)}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
