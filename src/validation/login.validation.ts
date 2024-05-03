import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("Please enter valid email address!"),
  password: z.string().min(6, "Password must be at least 6 character"),
});

export const loginDefaultValues = {
  email: "",
  password: "",
};
