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

export default function QuantityInput({
  label = "Quantity",
  value = 1,
  onChange,
  sx,
  required,
}) {
  const [quantity, setQuantity] = useState(value || 1);

  const increment = () => {
    setQuantity((old) => {
      onChange && onChange(old * 1 + 1);
      return old * 1 + 1;
    });
  };

  const decrement = () => {
    setQuantity((old) => {
      let newValue = 0;
      if (old <= 1) newValue = old;
      newValue = old - 1;
      onChange && onChange(newValue * 1);
      return newValue;
    });
  };

  const change = (value) => {
    if (value >= 1) {
      setQuantity(value * 1);
      onChange && onChange(value * 1);
    }
  };

  return (
    <FormControl sx={{ flexDirection: "row", alignItems: "center", ...sx }}>
      <FormLabel sx={{ flex: 1, color: "inherit" }}>{label}</FormLabel>
      <ButtonGroup sx={{ flex: 2 }}>
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
          required={required}
        />
        <Button variant="contained" disableElevation onClick={increment}>
          <AddIcon />
        </Button>
      </ButtonGroup>
    </FormControl>
  );
}
