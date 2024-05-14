import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type?: string;
  name: string;
  placeholder?: string;
  className?: any;
  label: string;
  required?: boolean;
  accept?: string;
  multiple?: any;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  sx?: SxProps;
};

const HCInput = ({
  type,
  name,
  label,
  required,
  variant,
  size,
  sx,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type || "text"}
          value={value}
          fullWidth
          sx={{ ...sx }}
          variant={variant || "outlined"}
          size={size || "small"}
          placeholder={label}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default HCInput;
