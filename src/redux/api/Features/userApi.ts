import { baseApi } from "../baseApi";
import { tagTypes } from "../tag-type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    updateMYProfile: build.mutation({
      query: (data) => {
        return {
          url: "/users/update-my-profile",
          method: "PATCH",
          data,
          contentType: "multipart/form-data",
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateMYProfileMutation } = userApi;
