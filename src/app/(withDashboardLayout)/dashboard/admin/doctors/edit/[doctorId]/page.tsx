"use client";

import {
  Gender,
  TDoctorInputs,
  updateDoctorInputData,
} from "@/Data/doctorData";
import HCForm from "@/components/Form/HCForm";
import HCInput from "@/components/Form/HCInput";
import HCSelect from "@/components/HCModal/HCSelect";
import Spinner from "@/components/Shared/Spinner";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/Features/doctor";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    doctorId: string;
  };
};

const DoctorUpdatePage = ({ params }: TParams) => {
  //   console.log(params?.doctorId);
  const router = useRouter();

  const id = params?.doctorId;

  const { data, isLoading } = useGetDoctorQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation();
  //   console.log(data);

  const handleFormSubmit = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.appointmentFee = Number(values.appointmentFee);
    values.id = id;
    // console.log({ id: values.id, body: values });

    try {
      const res = await updateDoctor({ id: values.id, body: values }).unwrap();
      if (res?.id) {
        toast.success("Doctor Updated Successfully!!!");
        router.push("/dashboard/admin/doctors");
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    registrationNumber: data?.registrationNumber || "",
    gender: data?.gender || "",
    experience: data?.experience || 0,
    appointmentFee: data?.appointmentFee || 0,
    qualification: data?.qualification || "",
    currentWorkingPlace: data?.currentWorkingPlace || "",
    designation: data?.designation || "",
  };
  return (
    <Box>
      <Typography component="h5" variant="h5">
        Update Doctor Info
      </Typography>
      {isLoading ? (
        <Spinner />
      ) : (
        <HCForm
          onSubmit={handleFormSubmit}
          defaultValues={data && defaultValues}
        >
          <Grid container spacing={4} mt={4}>
            {updateDoctorInputData.map((item: TDoctorInputs, i: number) => (
              <>
                {item.gender ? (
                  <Grid key={i} item md={4}>
                    <HCSelect
                      items={Gender}
                      name={item.name}
                      label={item.label}
                    />
                  </Grid>
                ) : (
                  <Grid key={i} item md={4}>
                    <HCInput
                      label={item.label}
                      name={item.name}
                      type={item.type!}
                    />
                  </Grid>
                )}
              </>
            ))}
          </Grid>

          <Button
            sx={{
              mt: 2,
            }}
            type="submit"
          >
            Update
          </Button>
        </HCForm>
      )}
    </Box>
  );
};

export default DoctorUpdatePage;
