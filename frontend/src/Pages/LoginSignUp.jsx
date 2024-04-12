import React, { useState } from 'react'
import './CSS/LoginSignUp.css'
// import logo_icon from '../Components/Assets/logo_icon1.png'
function LoginSignUp() {
  const [state, setState] = useState("Login")
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async()=>{
    console.log("Loing Function Excuted",formData);
    let responseData;
    await fetch(`http://localhost:4000/login`,{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }
  const signup = async()=>{
    console.log("Signup Function Excuted")
    let responseData;
    await fetch(`http://localhost:4000/signup`,{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className='login_signup'>
      <div className='backg'>
        {/* <div className='logo_signup'>
          <img src={logo_icon} alt="" />
        </div> */}
        <div className='block'>
          <div className="head">
            <h1>{state}</h1>
          </div>
          <div className="inputs">
            {state === "Sign up" ? <input type="text" name='username' value={formData.username} onChange={changeHandler}placeholder='Your Name' /> : <></>}
            <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Id' />
            <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
          </div>
          <div className='cred'>

            <div className='input_cred'>
              <input type="checkbox" name='' id='' />
              <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            <button onClick={()=>{state==="Login"?login():signup()}}>{state==="Sign up"?"Sign up":"Login"}</button>
            <div className='texti'>
              {state === "Sign up" ? <div className='ui'><h5>Been here before?</h5><span onClick={()=>{setState("Login")}}>log in</span></div> : <div className='ui'><h5>Create an account?</h5><span onClick={()=>{setState("Sign up")}}>Click here</span></div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
