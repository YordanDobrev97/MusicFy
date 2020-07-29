export default {
    register: function(email, password) {
        console.log('register function')
        const body = {
            email: email,
            password: password
        };

        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(r => r.json())
        .then(user => {
            return {...user}
        })
    }
}