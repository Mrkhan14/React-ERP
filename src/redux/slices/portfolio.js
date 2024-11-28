import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   loading: false,
   portfolios: [],
   total: 0,
   page: 1,
   isModalLoading: false,
};

export const getPortfolios = createAsyncThunk(
   'portfolio/getPortfolios',
   async () => {
      const { data } = await axios.get('ssssssssss');
      return data;
   }
);

const portfoliosSlices = createSlice({
   initialState,
   name: 'portfolio',
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getPortfolios.pending, state => {
            state.loading = true;
         })
         .addCase(getPortfolios.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.portfolios = payload;
         })
         .addCase(getPortfolios.rejected, state => {
            state.loading = false;
         });
   },
});

// const { name, reducer: portfoliosReducer } = portfolios;

// export { portfoliosReducer as default, name as portfoliosName };

const { reducer, name } = portfoliosSlices;

export { name as portfolioName };

export default reducer;
