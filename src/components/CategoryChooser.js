import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import { categoriesData } from "./Homepage/Categories/CategoriesItems/CategoriesData/CategoriesData";

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
          {categoriesData.map((item, idx) => {
            return (
              <MenuItem value={item.name} key={idx}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
}
