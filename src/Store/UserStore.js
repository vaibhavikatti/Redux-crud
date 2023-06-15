import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../Reducers/UserReducer'


//configure store
const UserStore = configureStore({
    reducer: UserReducer,
    devTools:true

})

export default UserStore 
