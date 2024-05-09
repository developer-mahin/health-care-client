import {
  Gender,
  TDoctorInputs,
  defaultValues,
  doctorInputData,
} from "@/Data/doctorData";
import HCForm from "@/components/Form/HCForm";
import HCInput from "@/components/Form/HCInput";
import HCFullScreenModal from "@/components/HCModal/HCFullScreenModal";
import HCSelect from "@/components/HCModal/HCSelect";
import { useCreateDoctorMutation } from "@/redux/api/Features/doctor";
import { convertToFormData } from "@/utils/convertToFormData";
import { doctorValidationSchema } from "@/validation/doctor.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();

  const handleDoctorCreate: SubmitHandler<FieldValues> = async (data) => {
    try {
      data.doctor.appointmentFee = Number(data.doctor.appointmentFee);
      data.doctor.experience = Number(data.doctor.experience);
      const values = convertToFormData(data);

      const res = await createDoctor(values).unwrap();
      if (res?.id) {
        toast.success("Successfully Doctor Created");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <HCFullScreenModal open={open} setOpen={setOpen} title="Create A Doctor">
        <HCForm
          onSubmit={handleDoctorCreate}
          className="mt-4"
          defaultValues={defaultValues}
          resolver={zodResolver(doctorValidationSchema)}
        >
          <Grid container spacing={4}>
            {doctorInputData.map((item: TDoctorInputs, i: number) => (
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
            type="submit"
            sx={{
              mt: 2,
            }}
          >
            Create Doctor
          </Button>
        </HCForm>
      </HCFullScreenModal>
    </Box>
  );
};

export default DoctorModal;
