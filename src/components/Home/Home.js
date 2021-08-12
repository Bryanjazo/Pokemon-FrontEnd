import React, { useEffect } from 'react'
import NavBar from './navBar';
import { redirect } from '../../actions/redirectToLogin';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPokemon } from '../../actions/userpokemon';

function Home(){
  let history = useHistory()
  let user = useSelector(state => state.userReducer.details)
  const dispatch = useDispatch()
  redirect(history)

  useEffect(() => {
    dispatch(getUserPokemon(user.id))

  }, []);

  return(
    <div>

    </div>
  )
}

export default Home;
