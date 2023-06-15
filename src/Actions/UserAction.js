import { createAsyncThunk } from "@reduxjs/toolkit"
import UserApi from "../API/UserApi"

// createAsyncThunk(actionConst , callback)




// Read
export const readUser = createAsyncThunk("users/retrive",async()=>{
 const res = await UserApi.getAll()
// console.log('all data',res.data) 
 return res.data.users
})




//Create
export const createUser = createAsyncThunk("users/create",async(user)=>{

})


//Update

export const updateUser = createAsyncThunk("users/update",async({user , id})=>{

})



//Delete
export const deleteUser = createAsyncThunk("users/delete",async ({id})=>{

})
