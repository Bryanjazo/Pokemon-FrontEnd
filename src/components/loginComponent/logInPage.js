import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import './login_page2.css'

function SignIn() {


    const dispatch = useDispatch()
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const handleLogin = (e) => {
      e.preventDefault()
     // Send request to users to API
     console.log('signed up')
     fetch('http://localhost:8080/api/v1/sessions', {
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
       console.log(data)
       if(data && data.uid){
         // console.log(data.jwt, "tokennnn")
          localStorage.setItem("token", data.uid)
            console.log(localStorage.token)
          // localStorage.setItem("token", data.jwt)
          dispatch({
            type: "GET_USER_DETAILS",
            payload: data
          })
          dispatch({
            type: "SET_USER_TOKEN",
            payload:   localStorage.token
          })
          // settingUserSignUp()
          history.push('/Home')
       }else{
         alert("Wrong Email Or Password")
       }
     })
    }

    return (
        <div class="style-container">
                <div class="style">

                    <div class="image-container">

                        <a class="image"><img src="https://fontmeme.com/permalink/210812/e85e4e556d7249a8313595d02d9e5784.png" alt="pokemon-font" border="0"/></a>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card">
                                    <form onSubmit={handleLogin} class="box">
                                        <h1>Login</h1>
                                        <p class="text-muted"> Please enter your login and password!</p>
                                        <input type="text" name="Email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                        <input type="password" name="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        <a class="forgot text-muted" href="#">Forgot password?</a><br></br>
                                        <a class="forgot text-muted" href="/SignUp">Don't Have An Account?</a>

                                        <input type="submit" name="" value="Login"/>
                                            {<div class="col-md-12">
                                                <ul class="social-network social-circle">
                                                    <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a></li>
                                                </ul>
                                            </div>}
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p> Pokemon 2021</p>

                </div>

        </div>
    )
}

export default SignIn


// import React, {useState} from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import {Link, useHistory} from 'react-router-dom'
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import {useDispatch} from 'react-redux'
// import './login_page.css'
//
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         AnimeCity
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
//
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));
//
// export default function SignIn() {
//   const classes = useStyles();
//   const dispatch = useDispatch()
//   const history = useHistory();
//   const [email, setEmail] = useState('')
//
//   const [password, setPassword] = useState('')
//
//   const handleSignIn = (e) => {
//     e.preventDefault()
//    // Send request to users to API
//    console.log('signed up')
//    fetch('http://localhost:8080/api/v1/sessions', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json',
//        Accept: 'application/json',
//      },
//      body: JSON.stringify({
//          email: email,
//          password: password
//       })
//    })
//    .then(resp => resp.json())
//    .then(function(data){
//      console.log(data)
//      if(data.uid){
//        // console.log(data.jwt, "tokennnn")
//         localStorage.setItem("token", data.uid)
//           console.log(localStorage.token)
//         // localStorage.setItem("token", data.jwt)
//         dispatch({
//           type: "GET_USER_DETAILS",
//           payload: data
//         })
//         // settingUserSignUp()
//         history.push('/Home')
//      }else{
//        alert("Wrong Email Or Password")
//      }
//    })
//   }
//   console.log(email)
//   return (
//
//     <Container component="main" maxWidth="xs">
//       <div className="LogInContainer">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <form onSubmit={handleSignIn} className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             value={email}
//             id="email"
//             label="Email"
//             name="email"
//             autoComplete="email"
//             onChange={(e) => setEmail(e.target.value)}
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             value={password}
//             label="Password"
//             type="password"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link to="/SignUp" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//         </div>
//     </Container>
//
//   );
// }
