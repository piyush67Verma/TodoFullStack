import React from 'react'
import { useState } from 'react';
import { registerAPICall } from '../services/AuthService';
function RegisterComponent() {

  const[name, setName] = useState('');
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  function handleFormRegistration(e){
    e.preventDefault();
    let register = {name, username, email, password};
    // console.log(register);
    registerAPICall(register).then((resp)=>{
        console.log(resp.data);    
    })
    .catch((error)=>{
        console.error(error);
    })

  }
  return (
    <div className="container">
        <br/> <br/> <br/>

        <div className="row">
            <div className='col-md-4 offset-md-4'>
                  <div className='card'>
                      <div className='card-header'>
                        <h2 className="text-center">Registration</h2>
                      </div>

                      <div className='card-body '>
                          <form>
                              
                              <div className="row mb-3">
                                  <label htmlFor='id-name' className='col-md-3 control-label'>Name</label>
                                  <div className='col-md-9'>
                                    <input
                                    id='id-name'
                                    type='text'
                                    name='name'
                                    className='form-control'
                                    placeholder='Enter Name'
                                    value={name}
                                    onChange={(e)=>{ setName(e.target.value)}}
                                    >
                                    </input>
                                  </div>
                              </div>
                                
                              <div className='row mb-3'>
                                    <label className='col-md-3 control-label' htmlFor='id-username'>Username</label>
                                    <div className='col-md-9'>
                                        <input
                                          id='id-username'
                                          type='text'
                                          name='username'
                                          className='form-control'
                                          placeholder='Enter Username'
                                          value={username}
                                          onChange={(e)=>{ setUsername(e.target.value)}}
                                        >
                                        </input>
                                    </div>
                              </div>     

                              <div className='row mb-3'>
                                    <label className='col-md-3 control-label' htmlFor='id-email'>Email</label>
                                    <div className='col-md-9'>
                                        <input
                                          id='id-email'
                                          type='text'
                                          name='email'
                                          className='form-control'
                                          placeholder='Enter Email'
                                          value={email}
                                          onChange={(e)=>{ setEmail(e.target.value)}}
                                        >
                                        </input>
                                    </div>
                              </div>      

                              <div className='row mb-3'>
                                    <label className='col-md-3 control-label' htmlFor='id-password'>Password</label>
                                    <div className='col-md-9'>
                                        <input
                                          id='id-password'
                                          type='text'
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
                                  <div className='d-flex justify-content-center'>
                                      <button 
                                        className='btn btn-success'
                                        onClick={(e)=>{ handleFormRegistration(e)}}
                                      >Submit</button>
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

export default RegisterComponent