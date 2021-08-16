export const userWins = async (uid,win, win_streak) =>{
  fetch(`http://localHost:8080/api/v1/users/${uid}`, {
    method: 'PATCH',
    credentials: "same-origin",
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    },
  body: JSON.stringify({
    wins: win,
    win_streak: win_streak
    })
  })
}
export const userLoses = async (uid, win_streak) =>{

  fetch(`http://localHost:8080/api/v1/users/${uid}`, {
    method: 'PATCH',
    credentials: "same-origin",
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    },
  body: JSON.stringify({
    win_streak: win_streak
    })
  })
}
