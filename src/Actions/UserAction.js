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
console.log('action=',user)

const res = await UserApi.create(user)
return res.data
})


//Update

export const updateUser = createAsyncThunk("users/update",async({user , id})=>{
console.log(`updated user = `, user, "and id = ",id)
const res =  await UserApi.update(user,id)
return res.data
})



//Delete
export const deleteUser = createAsyncThunk("users/delete",async ({id})=>{
console.log('delete user id =',id)
const res = await UserApi.delete(id)
return { id }
})
