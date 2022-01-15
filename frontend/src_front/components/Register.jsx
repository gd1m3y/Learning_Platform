import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './register.css';
import registerPic from './register-pic.svg';
import PopUp from './PopUp';
import validator from 'validator';
import axios from "axios";


function Register() {
    const [isError, setIsError] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isPopUp, setIsPopUp] =useState(false);

    const onSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setIsError("Confirm Password should match password");
            console.log(username);
        }else if (!validator.isEmail(name)) {
            setIsError("Enter valid Email!");
            console.log(name);

        } else {
            setIsError('');
            const RegisterData = {
                email: name,
                userName: username,
                password: password,
                
            }


            axios.post('http://localhost:5000/user/register', RegisterData)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });


            console.log(RegisterData);
            setIsPopUp(true);
            
        }
        


    }



    return (
        <div>
            <div className="my-container">
                <div className='outer'>
                    <div className="inner-left">
                        <h1>Welcome to  e-learning platform</h1>
                        <div className="pic-box">
                            <img className='log-pic' src={registerPic} alt="" />
                        </div>

                    </div>

                    <div className="inner-right">
                        <div className="login-card__Register">
                            <h2 className='welcom'>Create Your Account</h2>


                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Email ID" onChange={(e) => setName(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="textarea" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </Form.Group>
                                
                                <Button className='my-btn' variant="primary" type="submit" onClick={(e) => onSignUp(e)}>

                                    Register
                                </Button>
                                <div className='error-msg'>
                                    {isError}
                                </div>

                            </Form>


                        </div>
                    </div>
                </div>
            </div>
            <PopUp trigger={isPopUp} setTrigger={setIsPopUp}>
                <h3>You are Successfully Registered!</h3>
            </PopUp>
        </div>
    );

}

export default Register;