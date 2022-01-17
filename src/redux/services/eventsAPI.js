import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "eventsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rocky-gorge-32743.herokuapp.com",
  }),
  endpoints: builder => ({
    getEvents: builder.query({
      query: () => "/events",
      providesTags: ["Events"],
    }),
    counter: builder.mutation({
      query: id => ({
        url: `/events/counter/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Events"],
    }),
    getEventById: builder.query({
      query: id => `/events/${id}`,
      providesTags: ["Events"],
    }),
    getEventsByFounderId: builder.query({
      query: id => `/events/founder/${id}`,
      providesTags: ["Events"],
    }),
    addEvent: builder.mutation({
      query: infoForEvent => ({
        url: "/events",
        method: "POST",
        body: {
          ...infoForEvent,
        },
      }),
      invalidatesTags: ["Events"],
    }),
    deleteEvent: builder.mutation({
      query: id => ({
        url: `/events/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Events"],
    }),
    changeEvent: builder.mutation({
      query: infoForEvent => ({
        url: `/events/${infoForEvent.id}`,
        method: "PATCH",
        body: {
          ...infoForEvent,
        },
      }),
      invalidatesTags: ["Events"],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useAddEventMutation,
  useGetEventByIdQuery,
  useChangeEventMutation,
  useDeleteEventMutation,
  useGetEventsByFounderIdQuery,
  useCounterMutation,
} = API;
