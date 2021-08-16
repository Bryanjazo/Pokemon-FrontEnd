import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const user = useSelector(state => state.userReducer.details)
  const classes = useStyles();
  const date = new Date()
  const newDate = date.getDate()
  let month = date.getMonth() + 1;
let year = date.getFullYear();

  return (
    <React.Fragment>
      <Title>Token Balance</Title>
      <Typography component="p" variant="h4">
        {user.tokens} Tokens
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {month}/{newDate}/{year}
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}
