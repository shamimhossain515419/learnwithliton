import { apiSlice } from "../api/apiSlice";

const EnrollmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUsersEnrollment: builder.query({
      query: () => "enrollment",
    }),
    fetchUserMyCourses: builder.query({
      query: () => "my-courses",
    }),
  }),
});

export const { useFetchUsersEnrollmentQuery, useFetchUserMyCoursesQuery } = EnrollmentApi;
