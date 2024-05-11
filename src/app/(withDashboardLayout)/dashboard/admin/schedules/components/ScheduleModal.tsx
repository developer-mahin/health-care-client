import HCDatePicker from "@/components/Form/HCDatePicker";
import HCForm from "@/components/Form/HCForm";
import HCTimePicker from "@/components/Form/HCTimePicker";
import HCModal from "@/components/HCModal/HCModal";
import { useCreateScheduleMutation } from "@/redux/api/Features/schedule";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Box, Button, Stack } from "@mui/material";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleCreateSchedule: SubmitHandler<FieldValues> = async (values) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);

    try {
      const res = await createSchedule(values);

      if ("data" in res && res.data?.length) {
        toast.success("Schedule created successfully!!!");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Box>
      <HCModal open={open} setOpen={setOpen} title="Create A Schedule">
        <HCForm onSubmit={handleCreateSchedule}>
          <HCDatePicker sx={{ my: 2 }} name="startDate" label="Start Date" />
          <HCDatePicker sx={{ my: 2 }} name="endDate" label="End Date" />
          <HCTimePicker sx={{ my: 2 }} name="startTime" label="Start Time" />
          <HCTimePicker sx={{ my: 2 }} name="endTime" label="End Time" />
          <Button
            type="submit"
            sx={{
              mt: 2,
            }}
          >
            Create Schedule
          </Button>
        </HCForm>
      </HCModal>
    </Box>
  );
};

export default ScheduleModal;
