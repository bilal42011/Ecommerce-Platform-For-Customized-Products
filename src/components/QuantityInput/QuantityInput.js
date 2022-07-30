import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function QuantityInput({ label = "Quantity" }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((old) => {
      return old * 1 + 1;
    });
  };

  const decrement = () => {
    setQuantity((old) => {
      if (old <= 1) return old;
      return old - 1;
    });
  };

  const change = (value) => {
    setQuantity((old) => {
      if (value < 1) return old;
      return value;
    });
  };

  return (
    <FormControl sx={{ flexDirection: "row", alignItems: "center" }}>
      <FormLabel sx={{ mr: 2 }}>{label}</FormLabel>
      <ButtonGroup>
        <Button variant="contained" disableElevation onClick={decrement}>
          <RemoveIcon />
        </Button>
        <TextField
          fullWidth
          size="small"
          sx={{ minWidth: "auto" }}
          type="number"
          inputProps={{ inputMode: "numeric", min: 1 }}
          value={quantity}
          onChange={(e) => change(e.target.value)}
        />
        <Button variant="contained" disableElevation onClick={increment}>
          <AddIcon />
        </Button>
      </ButtonGroup>
    </FormControl>
  );
}
