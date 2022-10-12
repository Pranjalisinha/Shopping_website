import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

const Register = () => {
    const [Name,setName]=useState("")
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [err,setErr]=useState("")
    const Navigate=useNavigate();

    const handleregister=()=>{
        fetch("http://localhost:3001/userRegister/Register", {
        method: "post",
        body: JSON.stringify({
            Name,
            Email,
            Password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        if(res.status===400){
            setErr("User Already Exists")
        }else{
            alert("Successfully Added")
        }
        Navigate("/signin")
    }).catch((err) => {
        console.log(err)
    })
    }
    const handlesubmit=()=>{
        if(Name===""){
            setErr("Please Enter Your Name")
        }else if(Email===""){
            setErr("Please Enter Your Email")
        }else if(Password===""){
            setErr("Please Enter Your Password")
        }else{
            handleregister()
        }
    }
  return (
    <>
    <Navbar/>
        <div className="container my-5 py-0">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h1 className='display-6 fw-bolder text-center'>Register With Us</h1>
                        <hr />
                    </div>
                    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Name</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setName(e.target.value)} />
</div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Email</span>
  <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setEmail(e.target.value)}/>
</div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Your Password</span>
  <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=>setPassword(e.target.value)}/>
</div>

<button className='btn btn-outline-dark mt-3'onClick={handlesubmit}>Submit</button>
<p className='display-8 text-center py-3' style={{color:"red"}}>{err}</p>
                </div>

                </div>
    </>
  )
}

export default Register;