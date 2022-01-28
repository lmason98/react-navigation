// React imports
import React, { FunctionComponent, useState } from 'react';
// MUI imports
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Zoom from '@mui/material/Zoom';
// Custom imports
import Copyright from '../copyright/copyright';
// Images
import RepLogo from '../../img/rotoedgepro_logo.png';
import LoginPic from '../../img/smak_login.png';

const loginText = 'Have an account? Login';
const registerText = 'No account? Register';
const recoverText = 'Forgot password? Recover';

interface RecoverFormProps {
  show: boolean;
  doLogin: () => void;
}
/**
 * RegisterForm comp
 * @param show display this form
 * @param doLogin display login form
 * @constructor
 */
const RecoverForm: FunctionComponent<RecoverFormProps> = ({show, doLogin}) => {
  const [emailError, setEmailError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const doRecover = () => {
    if (email === '' || email.substring(email.length - 4) !== '.com' || !email.includes('@'))
      setEmailError(true);
    else {
      setEmailError(false);
      console.log('recover form submit!');
    }
  }

  return (
    <Zoom in={show}>
      <Grid item={true} sm={12} md={12} lg={12}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email'
          name='email'
          autoComplete='email'
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <Button onClick={() => doRecover()} fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Recover</Button>
        <Grid container xs>
          <Grid item={true} sm={12}>
            <Box m='auto'>
              <Link onClick={() => doLogin()} variant='body2' align='left' style={{ cursor: 'pointer' }}>{loginText}</Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Zoom>
  );
}


interface LoginFormProps {
  show: boolean;
  doRecover: () => void;
  loginSuccess: () => void;
}
/**
 * LoginForm comp
 * @param show display this form
 * @param doRecover display recover form
 * @param loginSuccess callback for a successful login
 * @constructor
 */
const LoginForm: FunctionComponent<LoginFormProps> = ({show, doRecover, loginSuccess}) => {
  const [userError, setUserError] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  /**
   * Posts login data to api
   */
  const doLogin = () => {
    if (user === '') {
      setUserError(true);
    } else if (password === '') {
      setPasswordError(true);
    } else if (user === 'test' && password === 'test') {  // do post, if success run success callback
      loginSuccess();
    }
  }

  return (
    <Zoom in={show}>
      <Grid item={true}>
        <TextField margin='normal' required fullWidth id='user' label='Username' name='user' autoComplete='user'
                   autoFocus error={userError}
                   onChange={(e) => setUser(e.target.value)} />
        <TextField margin='normal' required fullWidth id='pass' label='Password' name='pass' type='password'
                   autoComplete='current-password' error={passwordError}
                   onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={() => doLogin()} fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Sign In</Button>
        <Grid container>
          <Grid item={true} sm={12}>
            <Box m='auto'>
              <Link onClick={() => doRecover()} variant='body2' align='right' style={{ cursor: 'pointer' }}>
                {recoverText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Zoom>
  );
}

interface LoginProps {
  onLoginSuccess: () => void;
}
/**
 * Login comp
 * @param onLoginSuccess callback for successful login, updates main comp authed state.
 * @constructor
 */
const Login: FunctionComponent<LoginProps> = ({onLoginSuccess}) => {
  const [recovering, setRecovering] = useState<boolean>(false);


  let headerText: string = 'Sign in';
  let content: JSX.Element = <LoginForm
    show={!recovering}
    doRecover={() => {setRecovering(true)}}
    loginSuccess={() => onLoginSuccess()}
  />;

  if (recovering) {

    content = <RecoverForm
      show={recovering}
      doLogin={() => {setRecovering(false)}}
    />;
    headerText = 'Recover password';

  }

  return (
    <Grid container style={{height: '100vh'}}>
      <CssBaseline />
      <Grid
        item={true}
        xs={false}
        sm={4}
        md={6}
        style={{backgroundImage: `url(${LoginPic})`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      />
      <Grid item={true} xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={RepLogo} width={60} height={50} alt='RotoEdgePro Logo' />
          <Typography sx={{ mt: 1 }} component="h1" variant="h5">{headerText}</Typography>
          {content}
          <Grid item={true} sx={{ mt: 2 }}><Copyright /></Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
