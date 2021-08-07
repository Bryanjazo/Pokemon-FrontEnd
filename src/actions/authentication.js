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

    fetch('http://localhost:8080/api/v1/sessions', config)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}

export const createUser = (email, password) => {
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

    fetch('http://localhost:8080/api/v1/users', config)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}