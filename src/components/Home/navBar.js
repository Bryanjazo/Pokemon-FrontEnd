import React, {useState} from 'react';
import {LogOut} from '../../actions/authentication.js'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory,Link} from 'react-router-dom'
import {Button} from './Button.js'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import {clearAnimeHome, setUser} from '../Redux/reducerRedux.js'
import './navBar.css'

function NavBar(){
  const history = useHistory()
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()

  let user = useSelector(state => state.userReducer.details)
  let current_user = useSelector(state => state.userReducer.current_user)
  const handleClick = (e) =>{
    e.preventDefault()
    setClicked(!clicked)
  }
    const handleLogOut = () => {
      dispatch(LogOut())
      history.replace('/Login')
    }
    console.log(current_user, 'lllll')
  return(
  <nav className="NavbarItems">
    <Link className="cla" to={current_user !== '' ? '/' : '/Login'}>
    <h1  className="NavbarLogo changeTitle">Pokemon<i class="fab fa-fantasy-flight-games"></i></h1>
    </Link>
      <div className="MenuItmem" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>

        <li >
        <Link className="nav-links" to={current_user === '' ? '/Login' : '/Home'}>
            Home
        </Link>
      
          {current_user !== '' ? <Link className="nav-links" to="/Pokemon">Pokemon</Link> : ''}

          {current_user !== '' ?<Link className="nav-links" to="/Battle">Battle</Link> : ''}
          
        </li>
        {current_user !== '' ? <li className = "nav-tokens"> Tokens: {user.tokens}</li> : ''}
    </ul>
    <Link to={!user && '/Login' }>
    {current_user === '' ?  <Button>Login</Button> : <Button onClick={handleLogOut}>Sign Out</Button> }
    </Link>
  </nav>
  )
}

export default NavBar;


// const NavBar = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const dispatch = useDispatch()
//   const history = useHistory()
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleLogOut = () => {
//     dispatch(LogOut())
//   }
//
//
//     return (
//         <div className="nav-bar">
//           <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//             Menu
//           </Button>
//             <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//             <MenuItem onClick={handleClose}>
//                 <Link to="/pokemon">
//                     Pokedex
//                 </Link>
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//                 <Link to="/battle">
//                     Battle!
//                 </Link>
//             </MenuItem>
//             <MenuItem onClick={handleClose}>
//               <Link to="/Login">
//                     <button onClick={handleLogOut}>Log Out</button>
//               </Link>
//             </MenuItem>
//             </Menu>
//         </div>
//     );
// };
//
// export default NavBar;
