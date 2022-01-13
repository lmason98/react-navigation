// React imports
import React, { FunctionComponent, useState } from 'react';
// MUI imports
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Zoom from '@mui/material/Zoom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Custom imports
import Copyright from '../copyright/copyright';

const theme = createTheme();

const loginText = 'Have an account? Login';
const registerText = 'No account? Register';
const recoverText = 'Forgot password? Recover';

interface RecoverFormProps {
  show: boolean;
  doLogin: () => void;
  doRegister: () => void;
}
/**
 * RegisterForm comp
 * @param show display this form
 * @param doLogin display login form
 * @param doRegister display register form
 * @constructor
 */
const RecoverForm: FunctionComponent<RecoverFormProps> = ({show, doLogin, doRegister}) => {
  const [emailError, setEmailError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const doRecover = () => {
    if (email === '' || email.substring(email.length - 4) !== '.com' || !email.includes('@'))
      setEmailError(true);
    else {
      setEmailError(false);
      console.log('register form submit!');
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
          <Grid item={true} sm={6}>
            <Link onClick={() => doLogin()} variant='body2' align='left' style={{ cursor: 'pointer' }}>{loginText}</Link>
          </Grid>
          <Grid item={true} sm={6}>
            <Box display='flex' justifyContent='flex-end'>
              <Link onClick={() => doRegister()} variant='body2' align='right' style={{ cursor: 'pointer' }}>
                {registerText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Zoom>
  );
}

interface RegisterFormProps {
  show: boolean;
  doLogin: () => void;
  doRecover: () => void;
}
/**
 * RegisterForm comp
 * @param show display this form
 * @param doLogin display login form
 * @param doRecover display recover form
 * @constructor
 */
const RegisterForm: FunctionComponent<RegisterFormProps> = ({show, doLogin, doRecover}) => {
  return (
    <Zoom in={show}>
      <Grid item={true}>
        <TextField margin='normal' required fullWidth id='email' label='Email' name='email' autoComplete='email'
                   autoFocus />
        <TextField margin='normal' required fullWidth id='user' label='Username' name='user' autoComplete='user'
                   autoFocus />
        <TextField margin='normal' required fullWidth id='pass' label='Password' name='pass' type='password' />
        <TextField margin='normal' required fullWidth id='conf-pass' label='Confirm Password' name='conf-pass'
                   type='password' />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Submit</Button>
        <Grid container>
          <Grid item={true} sm={6}>
            <Link onClick={() => doLogin()} variant='body2' style={{ cursor: 'pointer' }}>{loginText}</Link>
          </Grid>
          <Grid item={true} sm={6}>
            <Box display='flex' justifyContent='flex-end'>
              <Link onClick={() => doRecover()} variant='body2' style={{ cursor: 'pointer' }}>{recoverText}</Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Zoom>
  );
}

interface LoginFormProps {
  show: boolean;
  doRegister: () => void;
  doRecover: () => void;
}
/**
 * LoginForm comp
 * @param show display this form
 * @param doRegister display register form
 * @param doRecover display recover form
 * @constructor
 */
const LoginForm: FunctionComponent<LoginFormProps> = ({show, doRegister, doRecover}) => {

  return (
    <Zoom in={show}>
      <Grid item={true}>
        <TextField margin='normal' required fullWidth id='user' label='Username' name='user' autoComplete='user'
                   autoFocus />
        <TextField margin='normal' required fullWidth id='pass' label='Password' name='pass' type='password'
                   autoComplete='current-password' />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>Sign In</Button>
        <Grid container>
          <Grid item={true} sm={6}>
            <Link onClick={() => doRegister()} variant='body2' align='left' style={{ cursor: 'pointer' }}>
              {registerText}
            </Link>
          </Grid>
          <Grid item={true} sm={6}>
            <Box display='flex' justifyContent='flex-end'>
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
  const [registering, setRegistering] = useState<boolean>(false);
  const [recovering, setRecovering] = useState<boolean>(false);


  let headerText: string = 'Sign in';
  let content: JSX.Element = <LoginForm
    show={!registering && !recovering}
    doRegister={() => {setRegistering(true); setRecovering(false)}}
    doRecover={() => {setRecovering(true); setRegistering(false)}}
  />;

  if (recovering) {

    content = <RecoverForm
      show={recovering}
      doLogin={() => {setRegistering(false); setRecovering(false)}}
      doRegister={() => {setRegistering(true); setRecovering(false)}}
    />;
    headerText = 'Recover password';

  } else if (registering) {

    content = <RegisterForm
      show={registering}
      doLogin={() => {setRegistering(false); setRecovering(false)}}
      doRecover={() => {setRecovering(true); setRegistering(false)}}
    />;
    headerText = 'Register new account';

  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{height: '100vh'}}>
        <CssBaseline />
        <Grid
          item={true}
          xs={false}
          sm={4}
          md={6}
          style={{backgroundImage: 'url(https://source.unsplash.com/random)', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
        <Grid item={true} xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}><LockOutlinedIcon /></Avatar>
            <Typography component="h1" variant="h5">{headerText}</Typography>
            {content}
            <Grid item={true} sx={{ mt: 2 }}><Copyright /></Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
