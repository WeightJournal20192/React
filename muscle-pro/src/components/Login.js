import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Login = ({ history }) => {
    
    const [userName, setUserName] = useState({
        username: '',
        password: ''
    });

    const handleChange = event => {
        //console.log('event', event.target.value);

        setUserName({...userName, [event.target.name]: event.target.value });
        //console.log('this is the handlechange username: ', {userName});
    };

    const submitForm = event => {
        event.preventDefault();
        //history.push(`/WelcomePage/${userName.username}`);
        history.push('/WelcomePage');
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
            <FormSetup onSubmit={submitForm}>
                <label htmlFor='username'>User Name</label>
                <EnterInput
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Minimum 5 Characters'
                    onChange={handleChange}
                    value={userName.username}
                />
                <label htmlFor='password'>Password</label>
                <EnterInput
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Minimum 5 Characters'
                    onChange={handleChange}
                    value={userName.password}
                />
                <LoginButton type='submit'>Log In</LoginButton>
            </FormSetup>
           {/*<WelcomePage id={userName.username} /> */}
        </div>
    );
};

export default Login;