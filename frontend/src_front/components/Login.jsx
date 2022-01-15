// import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './login.css';
import logPic from './login-pic2.svg';
import React, { useState } from 'react';
import axios from "axios";
import validator from 'validator';
function Login(){

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const onLogin = (e) => {
            e.preventDefault();
            
                
                const LoginData = {
                    email: email,
                   
                    password: password,
                    
                }
    console.log(LoginData);
    
                axios.post('http://localhost:5000/user/authenticate', LoginData)
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
    
    
                

                
                
            
            
    
    
        }
    
    

        return (
            <div className="my-container">
                
                <div className='outer'>
                    <div className="inner-left">
                        <img className='log-pic' src={logPic} alt="" />
                   </div>

                    <div className="inner-right">
                        <div className="login-card__login">
                            <h2 className='welcom'>Welcome Back!</h2>
                            <p className='p-text'>To keep using our service, sign-in using the email and password you signed up with.</p>
                            
                                <Form>
                                    <Form.Group className="mb-3 pt-1" controlId="formBasicEmail">
                                        <Form.Label>Email </Form.Label>
                                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button className='my-btn' variant="primary" type="submit" onClick={(e) => onLogin(e)}>

                                        Login
                                    </Button>
                                </Form>
                                <p className='forgot-p'>Forgot Password?</p>
                        </div>  
                    </div>
                </div>
            </div>
            
        );
    }


export default Login;