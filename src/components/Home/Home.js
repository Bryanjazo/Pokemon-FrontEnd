import React, { useEffect } from 'react'
import NavBar from './navBar';
import { redirect } from '../../actions/redirectToLogin';
import { useHistory } from 'react-router-dom';

function Home(){
  let history = useHistory()
  redirect(history)
  
  return(
    <div>
    {<NavBar/>}
    </div>
  )
}

export default Home;
