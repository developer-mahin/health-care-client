import { z } from "zod";

const DoctorSchema = z
  .object({
    email: z.string().email("Please enter a valid email address!"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    contactNumber: z
      .string()
      .min(10, "Contact number must be at least 10 characters"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    registrationNumber: z
      .string()
      .min(5, "Registration number must be at least 5 characters"),
    gender: z.string().min(1, "Gender must be specified"),
    experience: z.number().positive("Experience must be a positive number"),
    appointmentFee: z
      .number()
      .positive("Appointment fee must be a positive number"),
    qualification: z
      .string()
      .min(2, "Qualification must be at least 2 characters"),
    currentWorkingPlace: z
      .string()
      .min(5, "Current working place must be at least 5 characters"),
    designation: z.string().min(2, "Designation must be at least 2 characters"),
    profilePhoto: z.string(), // Assuming this is a URL to the profile photo
  })
  .catchall(z.string().optional());

export const doctorValidationSchema = z.object({
  doctor: DoctorSchema,
  password: z.string().min(6, "Password must be at least 6 characters"),
});
