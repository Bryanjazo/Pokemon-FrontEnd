import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const OpponentSelectedPokemon = (props) => {
  debugger
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [move, setMove] = React.useState({})

  const handleMoveSelect = (event) => {
    event.preventDefault()
    setMove(event.target.name)
  }


  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <div className="selected-ai-pokemon"><img src={props.selectedAIPokemon.front_image}></img>
          </div>
        </div>
    );
}

export default OpponentSelectedPokemon;
