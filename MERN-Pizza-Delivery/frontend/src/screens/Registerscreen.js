import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { registerUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from '../components/Success'
export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector(state =>state.registerUserReducer)
  const {error , loading , success} = registerstate
  const dispatch = useDispatch()
  function register(){

      if(password!=cpassword)
      {
          alert("passwords not matched")
      }
      else{
          const user={
              name,
              email,
              password
          }
          console.log(user);
          dispatch(registerUser(user))
      }

  }

  return (
    <div className='register'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

          {loading && (<Loading/>)}
          {success && (<Success success='User Registered Successfully' />)}
          {error && (<Error error='Email already registred' />)}

          <h2 className="text-center m-2" style={{ fontSize: "35px" , fontFamily: " 'Caveat', cursive", color:"red"}}>
            Register
          </h2>
          <div>
            <input required type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input required type="text" placeholder="Email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <input
              type="text"
              placeholder="Confirm password"
              className="form-control"
              value={cpassword}
              required
              onChange={(e)=>{setcpassword(e.target.value)}}
            />
            <button onClick={register} className="btn mt-3 mb-3" style={{ marginLeft: "160px", padding: "10px", width: "200px" ,fontFamily:"Times new roman", fontWeight:"bold"}}>REGISTER</button>
            <br/>
            <a style={{color:'black', fontFamily:"Times new roman"}} href="/login">Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}