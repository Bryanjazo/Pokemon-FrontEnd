import React, {useState} from 'react';
import {LogOut} from '../../actions/authentication.js'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory,Link} from 'react-router-dom'
// import {clearAnimeHome, setUser} from '../Redux/reducerRedux.js'
// import './Navbar.css'

function NavBar(){

  const {user} = useSelector((state) => state.anime)
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()
  const handleClick = (e) =>{
    e.preventDefault()
    setClicked(!clicked)
  }

  return(
  <nav className="NavbarItems">
    <Link className="cla" to="/">
    <h1  onClick={clearAnime} className="NavbarLogo changeTitle">AnimeCity<i class="fab fa-fantasy-flight-games"></i></h1>
    </Link>
      <div className="MenuItmem" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>


        <li >
        <Link className="nav-links" to="/Home">
            Home
        </Link>
          <Link className="nav-links" to="/Shows">
            Shows

        </Link>
          <Link className="nav-links" to="/Favorites">
            Favorites
        </Link>
          {user !== null ? <Link className="nav-links" to="/Profile">Profile</Link> : ''}


          <Link className="nav-links" to="/Premium">
            Premium
          </Link>
        </li>
    </ul>
    <Link to={!user && '/Login' }>
    {user === '' ?  <Button>Login</Button> : <Button onClick={handleLogOut}>Sign Out</Button> }
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
