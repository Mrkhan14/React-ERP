import { configureStore } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// import skillReducer, { skillName } from '../slices/skill';
// import portfolioQuery, {
//    portfolioName,
//    portfolioReducer,
// } from '../queries/portfolio';
import authReducer, { authName } from '../slices/auth';
import portfolioReducer, { portfolioName } from '../slices/portfolio';

const reducer = {
   [portfolioName]: portfolioReducer,
   [authName]: authReducer,
};

const store = configureStore({
   reducer: reducer,
   // middleware: getDefaultMiddleware =>
   //    getDefaultMiddleware().concat(portfolioQuery.middleware),
});

const StoreProvider = ({ children }) => {
   return <Provider store={store}>{children}</Provider>;
};

StoreProvider.propTypes = {
   children: PropTypes.node,
};

export default StoreProvider;
