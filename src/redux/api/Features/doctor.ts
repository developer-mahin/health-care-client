import { TDoctor, TMeta } from "@/types";
import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-type";

const doctorApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => {
        return {
          url: "/users/create-doctor",
          method: "POST",
          contentType: "multipart/form-data",
          data,
        };
      },
      invalidatesTags: [tagTypes.doctor],
    }),

    deleteDoctor: build.mutation({
      query: (id) => {
        return {
          url: `/doctor/soft/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.doctor],
    }),

    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TDoctor[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),

    getDoctor: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/doctor/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.doctor],
    }),

    updateDoctor: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/doctor/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.doctor, tagTypes.user],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateDoctorMutation,
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} = doctorApis;
