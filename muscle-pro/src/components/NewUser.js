import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import styled from 'styled-components';

// styled-components

// end styled-components

const NewUser = () => {
    
    const [userName, setUserName] = useState({
        user: '',
        password: ''
    });

    const handleChange = event => {
        console.log('event', event.target.value);

        setUserName({...userName, [event.target.name]: event.target.value });
        console.log(userName);
    };

    const submitForm = event => {
        event.preventDefault();
        setUserName({user: '', password: '' });
    };

    return (
        <div>
            <nav>
                <Link to='/'>Back to Login</Link>
            </nav>
            <h2>New User Registration</h2>
            <form onSubmit={submitForm}>
                <label htmlFor='username'>Enter User Name</label>
                <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Enter User Name'
                    onChange={handleChange}
                    value={userName.username}
                />
                <label htmlFor='password'>Enter Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Enter Password'
                    onChange={handleChange}
                    value={userName.password}
                />
                <button type='submit'>Submit</button>
            </form>
            <Route 
                path='/:userName/WelcomePage'
                render={renderProps => {
                    return <WelcomePage userName={userName} />
                }}
            />
        </div>
    );
};

export default NewUser;
