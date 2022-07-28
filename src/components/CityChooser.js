import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function CityChooser({ value = "", onChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Choose City</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Choose City"
        onChange={onChange}
      >
        <MenuItem value={"Lahore"}>Lahore</MenuItem>
        <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
        <MenuItem value={"Rawalpindi"}>Rawalpindi</MenuItem>
      </Select>
    </FormControl>
  );
}
