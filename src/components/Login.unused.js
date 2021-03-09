import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        alert('submitted')
    }
    
    return (
        <div className='login-container'>
            <h1 className='login-header'>Sign In</h1>
            <Form onSubmit={handleSubmit} className='vertical-container login-form'>
                <p>Enter your email address and password</p>
                <Form.Group size='lg'>
                    <Form.Control
                        autoFocus 
                        required
                        type='email'
                        placeholder='name@email.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                </Form.Group>

                <Form.Group size='lg'>
                    <Form.Control 
                        type='password'
                        placeholder='Password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                        />
                </Form.Group>

                <Form.Group size='lg' className='align-items-center'>
                    <Button block size='lg' type='submit'>Sign In</Button>
                </Form.Group>

            </Form>
        </div>
    )
}



// h1.login-header {
//     font-size: 24pt;
//     font-weight: bold;
//   }
  
//   .login-container {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: center;
//     background-color: white;
//     border-radius: 5px;
//     padding: 1rem;
//   }
  
//   .login-form {
//     margin: 1rem;
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//   }
  
//   .login-form * {
//     padding: .75rem;
//   }
  
//   .login-form input {
//     border: 1px solid black;
//     border-radius: 2px;
//   }
  
//   .login-form button {
//     background-color: #007d48;
//     border-radius: 5px;
//     border: 0;
//     font-weight: bold;
//     color: white;
//     width: 100%;
//   }
  
//   .float-right {
//     float: right
//   }