
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import styles from './login.module.css';
import logPic from './login-pic2.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PopUp from './PopUp';
import axios from "axios";

const Login = (props) => {
    const [isPopUp, setIsPopUp] =useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const LoginHandler = (e) => {
        e.preventDefault();
        
        const LoginData = {
            email: username,
           
            password: password,
            
        }
        
        if ( username !== "" & password !== ""){
            props.onLogin();
            axios.post('http://localhost:5000/user/authenticate', LoginData)
          .then(function (response) {
            console.log(response);
            navigate('/main');
          })
          .catch(function (error) {
            console.log(error);
            setIsPopUp(true);
          });
            
        }
        else{
            setIsPopUp(true);
        }
    }
        return (
            <div className={styles.myContainer}>
                
                <div className={styles.outer}>
                    <div className={styles.innerLeft}>
                        <img className={styles.logPic} src={logPic} alt="" />
                   </div>

                    <div className={styles.innerRight}>
                        <div className={styles.loginCard}>
                            <h2 className={styles.welcome}>Welcome Back!</h2>
                            <p className={styles.ptext}>To keep using our service, sign-in using the email and password you signed up with.</p>
                            
                                <Form>
                                    <Form.Group className="mb-3 pt-1" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setUsername(e.target.value)}/>
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    </Form.Group>
                                    
                                    <Button className={styles.myBtn} variant="primary" type="submit" onClick={LoginHandler}>
                                        Login
                                    </Button>
                                </Form>
                                
                        </div>  
                    </div>
                </div>
                <PopUp trigger={isPopUp} setTrigger={setIsPopUp}>
                <h3>Invalid Credentials</h3>
                <p>Please try again.</p>
            </PopUp>
            </div>
            
        );
}


export default Login;