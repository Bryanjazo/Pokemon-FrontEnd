import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link'

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <Link href="/pokemon">
                    Pokedex
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link href="/battle">
                    Battle!
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link href="/">
                    Logout
                </Link>
            </MenuItem>
            </Menu>
        </div>
    );
};

export default NavBar;