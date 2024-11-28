import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from '../../services/request';

const initialState = {
   user: null,
   isLoading: false,
};

export const login = createAsyncThunk('auth/login', async credentials => {
   const { data } = await request.post('auth/login', credentials);
   return data;
   console.log(credentials, 'ddddddddd');

   // try {
   //    const { data } = await request.post('auth/login', credentials);
   // } catch (error) {
   //    return rejectWithValue(error.response.data);
   // }
});

const authSlice = createSlice({
   initialState,
   name: 'auth',
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(login.pending, state => {
            state.isLoading = true;
         })
         .addCase(login.fulfilled, (state, action) => {
            console.log(action.payload, 'aaaaaaaaa');

            state.isLoading = false;
            state.user = action.payload;
         })
         .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         });
   },
});

const { reducer, name } = authSlice;

export { name as authName };

export default reducer;
