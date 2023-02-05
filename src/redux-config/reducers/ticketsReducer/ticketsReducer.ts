import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Ticket } from './ticketsTypes';

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async function (source: { searchId: string }, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${source.searchId}`
      );

      return await response.json();
    } catch (error: unknown) {
      return rejectWithValue({ stop: false });
    }
  }
);

interface TicketsState {
  tickets: Ticket[];
  error: Error[];
}

const initialState: { tickets: Ticket[]; error: Error[] } = {
  tickets: [],
  error: [],
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.fulfilled, (state: TicketsState, action) => {
      state.tickets.push(...action.payload.tickets);
    });
    builder.addCase(fetchTickets.rejected, (state: TicketsState, action) => {
      state.error.push(action.payload as Error);
    });
  },
});
