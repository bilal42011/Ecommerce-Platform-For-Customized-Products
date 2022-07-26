import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function SearchFilters() {
  const [budget, setBudget] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  return (
    <Box display="flex" alignItems={"center"} flexWrap="wrap">
      <Box minWidth={120}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Budget</InputLabel>
          <Select
            autoWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={budget}
            label="Budget"
            onChange={(e) => setBudget(e.target.value)}
          >
            <MenuItem>Budget</MenuItem>
            <MenuItem value={5000}>5,000</MenuItem>
            <MenuItem value={10000}>10,000</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box minWidth={150} ml={1}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label-1">Delivery Time</InputLabel>
          <Select
            autoWidth
            labelId="demo-simple-select-label-1"
            id="demo-simple-select-1"
            value={deliveryTime}
            label="Delivery Time"
            onChange={(e) => setDeliveryTime(e.target.value)}
          >
            <MenuItem>Delivery Time</MenuItem>
            <MenuItem value={1}>1 Day</MenuItem>
            <MenuItem value={2}>2 Day</MenuItem>
            <MenuItem value={3}>3 Day</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box flexGrow={1}></Box>
      <Typography>1259 Results Found</Typography>
    </Box>
  );
}
