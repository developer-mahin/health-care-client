import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TItem = {
  value: string;
  label: string;
};

interface TTextField {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: TItem[];
}

const HCSelect = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: TTextField) => {
  const { control, formState } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select">{label}</InputLabel>
          <Select
            {...field}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={label}
            onChange={(e) => field.onChange(e.target.value as string)}
            fullWidth={fullWidth}
            size={size}
            sx={sx}
            value={field.value || ""}
            error={!!error?.message}
          >
            {items.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default HCSelect;
