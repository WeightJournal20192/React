import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import WelcomePage from './WelcomePage';
import styled from 'styled-components';

// styled-components
const FormHeading = styled.h2 `
    margin-top: 40px;
    margin-bottom: 20px;
`;

const FormSetup = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const EnterInput = styled.input `
    margin-top: 20px;
    margin-bottom: 20px;
`;

const LoginButton = styled.button `
    margin-top: 30px;
`;
// end styled-components

const Login = ({ history, userName, setUserName }) => {
/*    
    const [userName, setUserName] = useState({
        username: '',
        password: ''
    });
*/

    const { register, handleSubmit, errors } = useForm();

    const handleChange = event => {
        //console.log('event', event.target.value);

        setUserName({...userName, [event.target.name]: event.target.value });
        //console.log('this is the handlechange username: ', {userName});
    };

    const submitForm = event => {
        //event.preventDefault();
        //history.push(`/WelcomePage/${userName.username}`);
        axios
          .post("https://weight-lifting1.herokuapp.com/api/auth/login", userName)
          .then(res => {
            localStorage.setItem("token", res.data.payload);
            history.push("/WelcomePage");
            setUserName({user: '', password: '' });
          })
          .catch(err => console.error(err));
        //history.push('/WelcomePage');
        //setUserName({user: '', password: '' });
    };

    console.log('this is assigned userName object: ', {userName});
    console.log('this is assigned username: ', userName.username);
    console.log('this is assigned password: ', userName.password);
    
    return (
        <div>
            <nav>
                <Link to='/newUser'>New User? Register Here</Link>
            </nav>
            <FormHeading>Current User Log In</FormHeading>
            <FormSetup onSubmit={handleSubmit(submitForm)}>
                <label htmlFor='username'>User Name</label>
                <EnterInput
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Minimum 5 Characters'
                    onChange={handleChange}
                    value={userName.username}
                    ref={register({ required: true, minLength: 5 })}
                />
                {errors.username && errors.username.type === 'required' && (
                    <p>This is required</p>
                )}
                {errors.username && errors.username.type === 'minLength' && (
                    <p>Must be 5 characters in length</p>
                )}
                <label htmlFor='password'>Password</label>
                <EnterInput
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Minimum 5 Characters'
                    onChange={handleChange}
                    value={userName.password}
                    ref={register({ required: true, minLength: 5 })}
                />
                {errors.password && errors.password.type === 'required' && (
                    <p>This is required</p>
                )}
                {errors.password && errors.password.type === 'minLength' && (
                    <p>Must be 5 characters in length</p>
                )}
                <LoginButton type='submit'>Log In</LoginButton>
            </FormSetup>
           {/*<WelcomePage id={userName.username} /> */}
        </div>
    );
};

export default Login;
