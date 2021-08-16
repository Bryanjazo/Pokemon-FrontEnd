
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory,Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
// Generate Sales Data
import './navBar.css'
function createData(time, amount) {
  return { time, amount };
}


export default function Chart() {
  const theme = useTheme();
  const user = useSelector(state => state.userReducer.details)
  return (
    <React.Fragment>
      <Title>Welcome {user.username},</Title>
      <ResponsiveContainer>
      <Link className="Link" to="/pokemon">
      <Title>Click Here to start playing</Title>
      </Link>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
