export const codeReduxAsyncThunk = `import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';

  const response = await axios.get(apiEndpoint);

  return response.data;
});
`;

export const codeReduxSliceInteractingWithAsyncThunk = `import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { fetchUsers } from '../service-asyncThunk/fetchUsers';

type User = {
  id: string;
  name: string;
};

const usersAdapter = createEntityAdapter<User>();

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {
    addOne: usersAdapter.addOne,
    updateOne: usersAdapter.updateOne,
    removeOne: usersAdapter.removeOne,
    setAll: usersAdapter.setAll,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      return state;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return state;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      return state
    })
  },
});
`;
