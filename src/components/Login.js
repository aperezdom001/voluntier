import React, { useState } from 'react';
import userService from '../utils/userService';
import { useHistory, Link } from 'react-router-dom';


function Login() {

    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ] = useState('')
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const history = useHistory();
    
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
   
    

    async function handleSubmit(e){
      e.preventDefault()
              
      try {
          await userService.login(state);
          // Route to wherever you want!
          props.handleSignUpOrLogin() // 
          history.push('/')
          
        } catch (err) {
          // Invalid user data (probably duplicate email)
          setError(err.message)
        }
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" value={state.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} required />
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
