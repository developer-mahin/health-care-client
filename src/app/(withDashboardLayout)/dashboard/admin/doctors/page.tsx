"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} from "@/redux/api/Features/doctor";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import Spinner from "@/components/Shared/Spinner";
import { toast } from "sonner";
import DeleteDoctorModal from "./components/DeleteModal";
import { useDebounced } from "@/redux/hook";

const DoctorsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [doctorId, setDoctorId] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const query: Record<string, any> = {};
  const debounced = useDebounced({
    searchTerm,
    delay: 1000,
  });
  if (!!debounced) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const doctors = data?.doctors;
  const meta = data?.meta;

  const handleDelete = async () => {
    try {
      const res = await deleteDoctor(doctorId).unwrap();
      if (res?.id) {
        toast.success("Doctor deleted successfully!!!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "appointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => {
                setDoctorId(row.id);
                setDeleteModalOpen(true);
              }}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
            <DeleteDoctorModal
              open={deleteModalOpen}
              setOpen={setDeleteModalOpen}
              handleDelete={handleDelete}
            />
          </Box>
        );
      },
    },
  ];

  return (
    <Box mt={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={handleClickOpen}>Create A New Doctor</Button>
        <TextField
          size="small"
          placeholder="Search"
          variant="outlined"
          label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Stack>
      <DoctorModal open={open} setOpen={setOpen} />
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <Box my={2}>
            <DataGrid rows={doctors} columns={columns} />
          </Box>
        )}
      </>
    </Box>
  );
};

export default DoctorsPage;
