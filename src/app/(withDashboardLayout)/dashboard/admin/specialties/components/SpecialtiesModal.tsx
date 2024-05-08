import HCFileUploader from "@/components/Form/HCFileUploader";
import HCForm from "@/components/Form/HCForm";
import HCInput from "@/components/Form/HCInput";
import HCModal from "@/components/HCModal/HCModal";
import { useCreateSpecialtiesMutation } from "@/redux/api/Features/specialties";
import { convertToFormData } from "@/utils/convertToFormData";
import { Box, Button, Grid } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TProps) => {
  const [createSpecialties] = useCreateSpecialtiesMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const convertData = convertToFormData(data);
      const res = await createSpecialties(convertData).unwrap();

      if (res?.id) {
        toast.success("Successfully Created An Specialties");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <HCModal open={open} setOpen={setOpen} title="Specialties Creation Modal">
        <HCForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <HCInput
                label="Title"
                name="title"
                type="text"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6}>
              <HCFileUploader label="Upload File" name="file" />
            </Grid>
          </Grid>
          <Button
            type="submit"
            sx={{
              mt: 2,
            }}
          >
            Create Specialties
          </Button>
        </HCForm>
      </HCModal>
    </Box>
  );
};

export default SpecialtiesModal;
