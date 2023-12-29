import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login(){
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate()

 const login=()=>{
     const id='hunter540'
     const pass= 7563

     if(id===email&&pass==password)
     {
         alert('Login Successfully')
         navigate('/detail')
     }
     else{
        alert('Enter valid Email and password')
        return
     }
 }




     return(
        <>
            <div className='login'>
              <form className='form'>
                <h1 className='heading'>Welcome To Login</h1>
                  <input 
                  type="email" 
                  placeholder='Enter Mail'
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  className='input-box'
                 />
                  <input 
                  type="password" 
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  className='input-box'
                 />

                 <button className='btn-login' onClick={login}>
                    Login
                 </button>
              </form>
            </div>
        </>
     )
}

export default Login;