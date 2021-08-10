import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function BattleMenu() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Battle Stats
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Total Health: <br></br>
          Current Health:
        </Typography>
        <Typography variant="body2" component="p">
          Current Move:
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Exit Battle</Button>
      </CardActions>
    </Card>
  );
}