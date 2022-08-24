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
  max,
  name,
}) {
  const [quantity, setQuantity] = useState(value || 1);

  const increment = () => {
    setQuantity((old) => {
      let oldValue = parseInt(old);
      if ((max && oldValue < max) || !max) {
        onChange && onChange(oldValue + 1);
        return oldValue + 1;
      }
      return oldValue;
    });
  };

  const decrement = () => {
    setQuantity((old) => {
      let newValue = 0,
        oldValue = parseInt(old);
      if (old <= 1) newValue = oldValue;
      else newValue = oldValue - 1;
      onChange && onChange(newValue * 1);
      return newValue;
    });
  };

  const change = (value) => {
    let newValue = Math.floor(value);
    if (newValue >= 1) {
      if ((max && newValue <= max) || !max) {
        setQuantity(newValue);
        onChange && onChange(newValue * 1);
      }
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
          name={name}
        />
        <Button variant="contained" disableElevation onClick={increment}>
          <AddIcon />
        </Button>
      </ButtonGroup>
    </FormControl>
  );
}
