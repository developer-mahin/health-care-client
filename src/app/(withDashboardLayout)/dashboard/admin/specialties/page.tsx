"use client";

import Spinner from "@/components/Shared/Spinner";
import {
  useDeleteSpecialtiesMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/Features/specialties";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import SpecialtiesModal from "./components/SpecialtiesModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
import DeleteSpecialtyModal from "./components/DeleteModal";

const SpecialtiesPage = () => {
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialties] = useDeleteSpecialtiesMutation();

  const [open, setOpen] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [dataId, setDataId] = useState<string>("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteSpecialties(dataId).unwrap();
      if (res?.id) {
        toast.success("Successfully Specialties Delete!!!");
        setOpenDeleteModal(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: GridColDef<(typeof data)[number]>[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box display="flex" alignItems="center" height="100%">
            <Image src={row.icon} alt="Icon" width={40} height={40} />
          </Box>
        );
      },
    },
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
                setOpenDeleteModal(true);
                setDataId(row.id);
              }}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
            <DeleteSpecialtyModal
              open={openDeleteModal}
              setOpen={setOpenDeleteModal}
              handleDelete={handleDelete}
            />
          </>
        );
      },
    },
  ];

  return (
    <Box mt={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={handleClickOpen}>Create A New Specialties</Button>
        <SpecialtiesModal open={open} setOpen={setOpen} />

        <TextField
          size="small"
          placeholder="Search"
          variant="outlined"
          label="Search"
        />
      </Stack>
      <Box mt={2}>
        {isLoading ? (
          <Spinner />
        ) : (
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              hideFooter={true}
              getRowHeight={() => 70}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
