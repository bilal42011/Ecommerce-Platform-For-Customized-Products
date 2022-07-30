import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

export default function CategoryChooser({ value, onChange }) {
  return (
    <Stack direction="row" alignItems={"center"}>
      <Typography minWidth={"20ch"} flex={1}>
        Product Category
      </Typography>
      <FormControl sx={{ flex: 2 }} fullWidth>
        <InputLabel id="city-chooser-label">Product Category</InputLabel>
        <Select
          labelId="city-chooser-label"
          id="city-chooser"
          value={value}
          label="Choose Category"
          onChange={onChange}
          fullWidth
        >
          <MenuItem value={"Wood Works"}>Wood Works</MenuItem>
          <MenuItem value={"Iron Works"}>Iron Works</MenuItem>
          <MenuItem value={"Grocerry"}>Grocerry</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
