

export function redirect(history) {
    if(localStorage.getItem('token')) {
        console.log('stay')
    } else {
        console.log('logout')
        history.push('/login')
    }
}