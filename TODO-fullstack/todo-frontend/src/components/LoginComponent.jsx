import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { loginAPICall, saveLoggedInUser, storeToken } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
function LoginComponent() {

  const[username, setUsername] =useState(''); 
  const[password, setPassword] =useState(''); 
  let navigator = useNavigate();
  function handleLoginForm(e){
        e.preventDefault();
        let loginObj = {usernameOrEmail:username, password};
        
        
        loginAPICall(loginObj).then((resp)=>{
            console.log(resp.data);

            // const token = 'Basic ' + window.btoa(username+":"+password);

            const token = "Bearer " + resp.data.accessToken;

            const role = resp.data.role;

            storeToken(token);

            saveLoggedInUser(username, role);
            
            navigator('/todos');

            window.location.reload(false);
        })
        .catch((error)=>{
            console.error(error);         
        })
  }


  return (
    <div className="container">
        <br/> <br/> <br/>
        <div className="row">
            <div className='col-md-7 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className="text-center">Login</h2>
                    </div>

                    <div className='card-body '>
                        <form>
                            <div className='row mb-3'>
                                    <label className='col-md-3 control-label' htmlFor='id-username-login'>Username or Email</label>
                                    <div className='col-md-8'  style={{marginRight:"3px"}}>
                                        <input
                                        id='id-username-login'
                                        type='text'
                                        name='usernameOrEmail'
                                        className='form-control'
                                        placeholder='Enter Username'
                                        value={username}
                                        onChange={(e)=>{ setUsername(e.target.value)}}
                                        >
                                        </input>
                                    </div>
                            </div>      

                            <div className='row mb-3'>
                                    <label className='col-md-3 control-label' htmlFor='id-password-login'>Password</label>
                                    <div className='col-md-8' style={{marginRight:"3px"}}>
                                        <input
                                        id='id-password-login'
                                        type='password'
                                        name='password'
                                        className='form-control'
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e)=>{ setPassword(e.target.value)}}
                                        >
                                        </input>
                                    </div>
                            </div> 

                            <div className="form-group mb-3">
                                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                                    <button 
                                        className='btn btn-success'
                                        onClick={(e)=>{ handleLoginForm(e)}}
                                    >Submit</button>
                                    <p>Not Registered? <Link to='/register'>Register here</Link></p> 
                                    
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent