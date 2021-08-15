import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { incrementCounter, setUserMove } from '../../actions/battle';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));


const MovesAlert = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [move, setMove] = React.useState({})
  const dispatch = useDispatch()
  let turnCount = useSelector(state => state.battleReducer.turnCount)

  const handleMoveSelect = (event) => {
    event.preventDefault()
    setMove(event.target.name)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBattleClick = (m) => {

    dispatch(setUserMove(m))
    dispatch(incrementCounter(turnCount))
    
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <div className="selected-pokemon"><img src={props.selectedPokemon.pokemon.back_image} onClick={handleClick}></img>
          <p className="move-buttons-group">
          {props.selectedPokemon.active_moves.map(m => {
            if(turnCount%2 === 0){
            return(
              
              <span className="moveButtons">
                <button onClick={() => (handleBattleClick(m))}>{m.name}</button>
              </span>
            )}
          })}</p>
          </div>
        </div>
    );
}

export default MovesAlert;
