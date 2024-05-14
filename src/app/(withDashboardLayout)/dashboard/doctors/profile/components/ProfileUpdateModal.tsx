import {
  Gender,
  TDoctorInputs,
  updateDoctorInputData,
} from "@/Data/doctorData";
import HCForm from "@/components/Form/HCForm";
import HCInput from "@/components/Form/HCInput";
import HCFullScreenModal from "@/components/HCModal/HCFullScreenModal";
import HCSelect from "@/components/HCModal/HCSelect";
import Spinner from "@/components/Shared/Spinner";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/Features/doctor";
import { Button, Grid } from "@mui/material";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import MultipleSelectChip from "./MultipleSelectChip";
import { useEffect, useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/Features/specialties";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};
const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const { data, isLoading, isSuccess } = useGetDoctorQuery(id);
  const [updateDoctor] = useUpdateDoctorMutation();
  const { data: allSpecialties } = useGetAllSpecialtiesQuery(undefined);
  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

  useEffect(() => {
    if (!isSuccess) return;

    setSelectedSpecialtiesIds(
      data?.doctorSpecialties.map((sp: any) => {
        return sp?.specialitiesId;
      })
    );
  }, [isSuccess, data?.doctorSpecialties]);

  const handleFormSubmit: SubmitHandler<FieldValues> = async (values) => {
    values.experience = Number(values.experience);
    values.appointmentFee = Number(values.appointmentFee);

    const specialties = selectedSpecialtiesIds.map((specialtiesId: string) => ({
      specialitiesId: specialtiesId,
      isDeleted: false,
    }));

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];

    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );

    updatedValues.specialties = specialties;

    try {
      const res = await updateDoctor({ id, body: updatedValues }).unwrap();
      if (res?.id) {
        toast.success("Doctor Updated Successfully!!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
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
    <HCFullScreenModal
      open={open}
      setOpen={setOpen}
      title="Update Doctor Information"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <HCForm
          onSubmit={handleFormSubmit}
          defaultValues={data && defaultValues}
        >
          <Grid container spacing={4} mt={2}>
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

            <Grid item md={4}>
              <MultipleSelectChip
                allSpecialties={allSpecialties}
                selectedIds={selectedSpecialtiesIds}
                setSelectedIds={setSelectedSpecialtiesIds}
              />
            </Grid>
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
    </HCFullScreenModal>
  );
};

export default ProfileUpdateModal;
