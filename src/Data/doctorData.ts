import { z } from "zod";

export type TDoctorInputs = {
  name: string;
  label: string;
  type?: string;
  gender?: true;
};

export const doctorInputData: TDoctorInputs[] = [
  {
    name: "doctor.name",
    label: "Name",
    type: "text",
  },
  {
    name: "doctor.email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "doctor.contactNumber",
    label: "Contact Number",
    type: "text",
  },
  {
    name: "doctor.address",
    label: "Address",
    type: "text",
  },
  {
    name: "doctor.registrationNumber",
    label: "Registration Number",
    type: "text",
  },
  {
    name: "doctor.experience",
    label: "Experience",
    type: "number",
  },
  {
    name: "doctor.gender",
    label: "Gender",
    gender: true,
  },
  {
    name: "doctor.appointmentFee",
    label: "AppointmentFee",
    type: "number",
  },
  {
    name: "doctor.qualification",
    label: "Qualification",
    type: "text",
  },
  {
    name: "doctor.currentWorkingPlace",
    label: "Current Working Place",
    type: "text",
  },
  {
    name: "doctor.designation",
    label: "Designation",
    type: "text",
  },
];

export const Gender = [
  {
    label: "MALE",
    value: "MALE",
  },
  {
    label: "FEMALE",
    value: "FEMALE",
  },
];

export const defaultValues = {
  doctor: {
    email: "",
    name: "",
    contactNumber: "",
    address: "",
    registrationNumber: "",
    gender: "",
    experience: 0,
    appointmentFee: 0,
    qualification: "",
    currentWorkingPlace: "",
    designation: "",
    profilePhoto: "",
  },
  password: "",
};
