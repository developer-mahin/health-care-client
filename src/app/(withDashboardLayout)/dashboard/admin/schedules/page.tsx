"use client";

import Spinner from "@/components/Shared/Spinner";
import {
  useDeleteScheduleMutation,
  useGetAllSchedulesQuery,
} from "@/redux/api/Features/schedule";
import { TSchedule } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ScheduleModal from "./components/ScheduleModal";
import ScheduleDeleteModal from "./components/ScheduleDeleteModal";
import { toast } from "sonner";

const SchedulesPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [schedulesData, setSchedulesData] = useState<any>([]);
  const [scheduleId, setScheduleId] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { data, isLoading } = useGetAllSchedulesQuery({});
  const [deleteSchedule] = useDeleteScheduleMutation();

  const schedules = data?.schedules;
  const meta = data?.meta;

  useEffect(() => {
    const updatedData = schedules?.map((schedule: TSchedule) => {
      return {
        id: schedule.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setSchedulesData(updatedData);
  }, [schedules]);

  const handleScheduleDelete = async () => {
    try {
      const res = await deleteSchedule(scheduleId);
      if ("data" in res && !!res?.data) {
        setDeleteModalOpen(false);
        toast.success("Schedule Deleted Successfully!!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <>
            <IconButton
              onClick={() => {
                setDeleteModalOpen(true);
                setScheduleId(row.id);
              }}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <ScheduleDeleteModal
              handleDelete={handleScheduleDelete}
              open={deleteModalOpen}
              setOpen={setDeleteModalOpen}
            />
          </>
        );
      },
    },
  ];

  return (
    <Box mt={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={handleClickOpen}>Create Schedules</Button>
      </Stack>
      <ScheduleModal open={open} setOpen={setOpen} />

      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={schedulesData ?? []} columns={columns} />
        </Box>
      ) : (
        <Spinner />
      )}
    </Box>
  );
};

export default SchedulesPage;
