export const signIn = (email, password) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    fetch('http://localHost:3000/sessions', config)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}