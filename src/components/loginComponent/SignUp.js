import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link, useHistory} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch,useSelector} from 'react-redux'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        AnimeCity
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    borderStyle: 'solid',
    backgroundColor: "white"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory();
  const [email, setEmail] = useState('')
  const current_user = useSelector(state => state.userReducer.details)
  const [password, setPassword] = useState('')
  console.log(current_user)

  const handleSignIn = (e) => {
    e.preventDefault()
   // Send request to users to API
   console.log('signed up')
   fetch('http://localhost:8080/api/v1/users', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json',
     },
     body: JSON.stringify({
         email: email,
         password: password
      })
   })
   .then(resp => resp.json())
   .then(function(data){
     console.log(data.id)

     if(data.uid){
       console.log(data)
       // console.log(data.jwt, "tokennnn")
        localStorage.setItem("token", data.uid)
        console.log(localStorage.token)
        // localStorage.setItem("token", data.jwt)
        dispatch({
          type: "GET_USER_DETAILS",
          payload: data
        })
        // settingUserSignUp()
        history.push('/Home')
     }else{
       alert("Email Already Exists")
     }
   })
  }
  console.log(email)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form class="form"onSubmit={handleSignIn} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/Login" variant="body2">
                {"Already Have An Account? Login"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
