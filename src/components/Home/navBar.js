import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {LogOut} from '../../actions/authentication.js'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory,Link} from 'react-router-dom'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    dispatch(LogOut())
  }


    return (
        <div className="nav-bar">
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
          </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
                <Link to="/pokemon">
                    Pokedex
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link to="/battle">
                    Battle!
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/Login">
                    <button onClick={handleLogOut}>Log Out</button>
              </Link>
            </MenuItem>
            </Menu>
        </div>
    );
};

export default NavBar;
