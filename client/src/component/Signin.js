import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'

const SignIn = () => {
    
    const Navigate = useNavigate()
    const [login, setLogin] = useState({Email: "", Password: ""})
    const [err,setErr]=useState("")
  
    const handlelogin=()=>{
        axios({
            url: "http://localhost:3001/userRegister/userlogin",
            method: "POST",
            headers: {
            },
            data: login
        }).then((loginData)=> {    
          localStorage.setItem("authorization", loginData.data.authToken);
            Navigate("/products")
        }).catch((err)=> {
            alert(err.response.data)
            
        })
    }
    console.log(login)
  const handlesubmit=()=>{
     if(login.Email===""){
        setErr("Please Enter Your Email")
    }else if(login.Password===""){
        setErr("Please Enter Your Password")
    }else{
        handlelogin()
    }
}
  return (

    <>
    <Navbar/>
    <div className="container my-5 py-0">
            <div className="row">
                <div className="col-12 mb-2">
                    <h1 className='display-6 fw-bolder text-center'>Login With Your Details</h1>
                    <hr />
                </div>
               
<div class="input-group mb-3">
<span class="input-group-text" id="inputGroup-sizing-default">Enter Your Email</span>
<input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=> {setLogin({...login, Email: e.target.value})}}/>
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="inputGroup-sizing-default">Enter Your Password</span>
<input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e)=> {setLogin({...login, Password: e.target.value})}}/>
</div>


<button className='btn btn-outline-dark mt-3'onClick={handlesubmit}>Submit</button>
<p className='display-8 text-center py-3' style={{color:"red"}}>{err}</p>
            </div>

            </div>
</>
  )
}

export default SignIn