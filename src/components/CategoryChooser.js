import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

export default function CategoryChooser({
  value,
  onChange,
  name,
  required,
  hideLabel,
  label = "Product Category",
}) {
  return (
    <Stack direction="row" alignItems={"center"}>
      {!hideLabel && (
        <Typography minWidth={"20ch"} flex={1}>
          {label}
        </Typography>
      )}
      <FormControl sx={{ flex: 2 }} fullWidth>
        <InputLabel id="city-chooser-label">{label}</InputLabel>
        <Select
          labelId="city-chooser-label"
          id="city-chooser"
          value={value}
          label="Choose Category"
          onChange={onChange}
          fullWidth
          required={required}
          name={name}
        >
          <MenuItem value={"Iron Works"}>Iron Works</MenuItem>
          <MenuItem value={"Wood Works"}>Wood Works</MenuItem>
          <MenuItem value={"Grocerry"}>Grocerry</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
