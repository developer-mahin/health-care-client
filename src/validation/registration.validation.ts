import { z } from "zod";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please Enter Your Name"),
  email: z.string().email("Please enter valid email address!"),
  password: z.string().min(6, "Password must be at least 6 character"),
  contactNumber: z
    .string()
    .regex(/^\d{3}$/, "Please enter valid phone number"),
  address: z.string().min(1, "Please enter address"),
});

export const registerValidationSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 character"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};
