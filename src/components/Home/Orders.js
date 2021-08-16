import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [allUsers, setAllUsers] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/users")
    .then(resp => resp.json())
    .then(users => {
        setAllUsers(users)
    })
  },[])


console.log(allUsers)
  return (
    <React.Fragment>
      <Title>Users Playing</Title>
      <Table size="small">
        <TableHead>
          <TableRow>

            <TableCell>User Name</TableCell>
            <TableCell>Wins</TableCell>
            <TableCell align="right">Win Streak</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.wins}</TableCell>
              <TableCell align="right">{row.win_streak}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
      </div>
    </React.Fragment>
  );
}
