import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-type";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialties: build.mutation({
      query: (data) => {
        return {
          url: "/specialties",
          method: "POST",
          contentType: "multipart/form-data",
          data,
        };
      },
      invalidatesTags: [tagTypes.specialties],
    }),

    deleteSpecialties: build.mutation({
      query: (id) => {
        return {
          url: `/specialties/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.specialties],
    }),

    getAllSpecialties: build.query({
      query: () => {
        return {
          url: "/specialties",
          method: "GET",
        };
      },
      providesTags: [tagTypes.specialties],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateSpecialtiesMutation,
  useGetAllSpecialtiesQuery,
  useDeleteSpecialtiesMutation,
} = specialtiesApi;
