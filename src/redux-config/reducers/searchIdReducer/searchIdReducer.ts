import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async function () {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  return await response.json();
});

interface SearchIdState {
  searchId: string;
}

const initialState: { searchId: string } = { searchId: '' };

export const searchIdSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchId.fulfilled, (state: SearchIdState, action) => {
      state.searchId = action.payload;
    });
  },
});
