import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { createUser } from '../Actions/UserAction'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [user,setuser]=useState({
    firstName: " ",
    lastName : '',
    age:0,
    email:"",
    phone:""
  })

  const [gender,setGender]= useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const readValue = async (e)=>{
    const {name,value}= e.target 
    setuser({...user,[name]:value})
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    try {
      let newUser = {
        ...user,
        gender
      }
      console.log('new user = ',newUser)
      dispatch(createUser(newUser))
      .unwrap()
      .then(res =>{
        toast.success('new user created successfully')
        navigate(`/`)
      }).catch(err=>toast.error(err.response.data.msg))
    } catch (err) {
      toast.error(err.msg) 
    }
  }
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h5 className="display-3 text-success">Create</h5>
        </div>
    </div>
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <form autoComplete='off' onSubmit={submitHandler}>
          <div className="form-group mt-2">
            <label htmlFor="firstName">FirstName</label>
            <input type="text" name='firstName'value={user.firstName} onChange={readValue} id='firstName' className="form-control" />
          </div>

          <div className="form-group mt-2">
          <label htmlFor="lastName">LastName</label>
            <input type="text" name='lastName'value={user.lastName} onChange={readValue} id='lastName' className="form-control" />
          </div>

          <div className="form-group mt-2">
          <label htmlFor="age">Age</label>
            <input type="text" name='age'value={user.age} onChange={readValue} id='age' className="form-control" />
          </div>
         
          <div className="form-group mt-2">
          <label htmlFor="gender" >Gender</label>
          <br />
            <div className="form-check form-check-inline">
              <input type="radio" name='gender' value={"male"} checked={gender == "male"} onChange={(e)=>{
                setGender(e.target.value)
              }} id='gender'    className="form-check input" required />
              <label htmlFor="gender" className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name='gender' value={"female"} checked={gender == "female"} onChange={(e)=>{
                setGender(e.target.value)
              }} id='gender'    className="form-check input" required />
               <label htmlFor="gender" className="form-check-label">FeMale</label>
            </div>

            <div className="form-check form-check-inline">
              <input type="radio" name='gender' value={"transgender"} checked={gender == "transgender"} onChange={(e)=>{
                setGender(e.target.value)
              }} id='gender'    className="form-check input" required />
               <label htmlFor="gender" className="form-check-label">Transgender</label>
            </div>
          </div>

          <div className="form-group mt-2">
           <label htmlFor="email">Email</label>
            <input type="email" name='email'value={user.email} onChange={readValue} id='email' className="form-control" />
          </div>

          <div className="form-group mt-2">
          <label htmlFor="phone">Phone-Number</label>
            <input type="number" name='phone'value={user.phone} onChange={readValue} id='phone' className="form-control" />
 
          </div>
          <div className="form-group mt-2">
            <input type="submit" value={"Create User"} className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
   </div>
  )
}

export default Create
