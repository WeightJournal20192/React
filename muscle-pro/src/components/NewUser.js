import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import WelcomePage from './WelcomePage';
import styled from 'styled-components';

// styled-components
const Container = styled.div`
    padding-top: 25px;
    background: #d9d7d6
`

const StyledLink = styled(Link)`
    color: #282c34;
        &:hover {color: #FFC300;}
    font-size: 1.75rem;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
`;

const FormHeading = styled.h2`
    font-size: 2rem;
    color: #282c34;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const FormSetup = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #282c34;
    font-size: 1.15rem;
    font-weight: 600;
`;

const EnterInput = styled.input`
    width: 12%;
    height: 2vh;
    margin-top: 10px;
    margin-bottom: 5px;
`

const Error = styled.p`
    margin-top: 0px;
    font-size: 1rem;
    color: #ed2b38;
`

const LoginButton = styled.button`
    margin-top: 15px;
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 1.3rem;
    background: #FFC300;
    border: 1px solid #333;
    border-radius: 5px;
    width: 12%;
    height: 5vh;
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
        history.push('/WelcomePage');
        setUserName({user: '', password: '' });
    };

    console.log('this is assigned userName Object: ', {userName});
    console.log('this is assigned password: ', userName.password);
    
    return (
        <Container>
            <div>
                <StyledLink>
                    <Link to='/'>Back to Login</Link>
                </StyledLink>
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
                        <Error>A username is required.</Error>
                    )}
                    {errors.username && errors.username.type === 'minLength' && (
                        <Error>Must be 5 characters in length.</Error>
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
                        <Error>A password is required.</Error>
                    )}
                    {errors.password && errors.password.type === 'minLength' && (
                        <Error>Must be 5 characters in length.</Error>
                    )}
                    <LoginButton type='submit'>Register</LoginButton>
                </FormSetup>
            {/*    <WelcomePage id={userName.username} /> */}
            </div>
        </Container>
    );
};

export default NewUser;