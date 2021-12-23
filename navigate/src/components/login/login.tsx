import React, { FunctionComponent } from "react";
import './login.css';
import { InputGroup, Form, FormGroup, FormLabel, FormControl, FloatingLabel, Button } from 'react-bootstrap';

import loginImage from '../../login_img.jpg';
import logo from "../../logo.png";

/*
* Name: LoginForm
* Description: App login form
* */
const LoginForm: FunctionComponent = () => {
  return (
    <Form>

      <InputGroup className="" size="sm" hasValidation>
        <InputGroup.Text className="" style={{padding: '1rem'}} >Username</InputGroup.Text>
        <FormControl type="text" required size="sm" isValid />
        <FormControl.Feedback type="invalid">Username required.</FormControl.Feedback>
        <FormControl.Feedback type="valid">Success.</FormControl.Feedback>
      </InputGroup>

    </Form>
  );
}

/*
* Name: Login
* Description: App login
* */
const Login: FunctionComponent = () => {

  const imageSize: number = 80;

  return (
    <div className="login-div row">
      <div style={{height: '10vh'}} className="col-3"> </div>
      <div className="col-6 mt-5">

        {/*Welcome*/}
        <img
          src={logo}
          width={imageSize+5}
          height={imageSize}
          className="d-line-block align-top"
          alt="RotoEdgePro logo"
        />
        <h2 className="text-light mb-4">Welcome</h2>

        <LoginForm />

      </div>
    </div>
  );
}

export default Login;
