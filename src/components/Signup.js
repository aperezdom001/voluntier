import React, { useState } from 'react';
import axios from 'axios';
import userService from '../utils/userService';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Signup = () => {
    const [invalidForm, setValidForm] = useState(false)
  const [error, setError ] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState]  = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  });

  const history = useHistory()
  
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){

    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile);


    for (let key in state){
      formData.append(key, state[key])
    }

    try {
      // refere to the utils/userService, to look at the signup fetch function
      await userService.signup(formData);
      // setTheUser in our app
      props.handleSignUpOrLogin() // gets the token from localstorage and updates the user state in our app.js
      // with the correct user object from the current token
      // then route to the homepage
      history.push('/') // defined above from react-router-dom
      // after this we can go whereever

    } catch(err){
      console.log(err.message)
      setError(err.message)
    }

  }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor='name'>Name</label>
                            <input type="text" name="username" value={state.username} onChange={handleChange} className='form-control'/>
                        </div>

                        <div className="form-group">
                        <label htmlFor='email'>email</label>
                            <input type="email" name="email" value={state.email} onChange={handleChange} className='form-control'/>
                        </div>

                        <div className="form-group">
                        <label htmlFor='password'>Password</label>
                            <input type="password" name="password" value={state.password} onChange={handleChange} className='form-control'/>
                        </div>

                        <div className="form-group">
                        <label htmlFor='confirmPassword'>Password</label>
                            <input type="password" name="passwordConf" value={state.passwordConf} onChange={handleChange} className='form-control'/>
                        </div>
                        
                        <button type ="submit" className="btn btn-primary float-right">Submit</button>

                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Signup;
