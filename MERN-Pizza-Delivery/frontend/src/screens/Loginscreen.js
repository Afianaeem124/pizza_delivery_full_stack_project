import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
export default function Loginscreen() {
  

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , error} = loginstate
    const dispatch = useDispatch()

    useEffect(() => {

          if(localStorage.getItem('currentUser'))
          {
              window.location.href='/'
          }
        
    }, [])

    function login(){
        const user={email , password}
        dispatch(loginUser(user))
    }

    return (
        <div className='login' >
         <div className="row justify-content-center mt-5" >
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded" style={{  fontFamily: "Times new roman", color:"black"}}>
          <h2 className="text-center m-2" style={{ fontSize: "35px" , fontFamily: " 'Caveat', cursive", color:"red"}}>
            Login
          </h2>

          {loading && (<Loading/>)} 
          {error && (<Error error='Invalid Credentials'/>)}

          <div>
            <input required type="text" placeholder="Email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}}  />
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            
            <button onClick={login} className="btn mt-3 mb-3" style={{ marginLeft: "160px", padding: "10px", width: "200px" ,fontFamily:"Times new roman", fontWeight:"bold"}}>
  LOGIN
</button>

            <br/>
            <a style={{color:'black'}} href="/register" className="mt-2">Register first?if you are not currently registered</a>
          </div>
        </div>
      </div>
        </div>
    )
}