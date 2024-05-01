import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: any;
  label?: string;
  required?: boolean;
  accept?: string;
  multiple?: any;
  variant: "outlined" | "filled" | "standard";
  size: "small" | "medium";
};

const HCInput = ({
  type,
  name,
  label,
  required,
  variant,
  size,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required,
      }}
      render={({ field: { value, ...field } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          value={value}
          fullWidth
          variant={variant}
          size={size}
          //   multiple={multiple}
          //   accept={accept}
        />
      )}
    />
  );
};

export default HCInput;
