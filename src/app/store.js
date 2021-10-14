import {configureStore} from '@redux.js/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
    reducer:{
        user:userReducer,
    }
})