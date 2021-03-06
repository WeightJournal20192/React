import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//import axios from 'axios';
//import axiosWithAuth from './axiosWithAuth';
import NewWelcomePage from './NewWelcomePage';
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

const NewUser = ({ history, userName, setUserName }) => {
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
            //e.preventDefault();
    /*        axios
                .post('https://weight-lifting1.herokuapp.com/api/auth/register', userName)
                .then(res => {
                    console.log(res)
                    axiosWithAuth().post('https://weight-lifting1.herokuapp.com/api/auth/login', userName)
                        .then(res =>
                            localStorage.setItem('token', res.data.token),
                            history.push('/WelcomePage')
                            )
                })
    */
        history.push("/NewWelcomePage");
        setUserName({username: '', password: '' });
    };

    console.log('this is assigned userName Object: ', {userName});
    console.log('this is assigned password: ', userName.password);
    
    return (
        <div>
            <nav>
                <Link className="link" to='/'>Back to Login</Link>
            </nav>
            <FormHeading>New User Registration</FormHeading>
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
                <LoginButton type='submit'>Register</LoginButton>
            </FormSetup>
        {/*    <WelcomePage id={userName.username} /> */}
        </div>
    );
};

export default NewUser;
