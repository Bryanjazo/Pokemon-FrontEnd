import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { getUserPokemon } from '../../actions/userpokemon';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BattleMenu(props) {
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.details)
const test = false
  useEffect(() => {
    return () => {
      
    };
  }, [props.selectedPokemon.hp, props.selectedPokemon.name]);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.userTeam ? "My Stats" : "Challenger Stats"}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Pokemon's Name: {props.selectedPokemon.name}<br></br>
          Pokemon Current Health: {props.selectedPokemon.hp}<br></br>
        </Typography>
      </CardContent>
      <CardActions>
      {props.userTeam ? <Button size="small">Exit Battle</Button> : null}
      </CardActions>
    </Card>
  );
}