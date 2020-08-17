fetch('http://localhost:3001/song/all')
.then(r => r.json())
.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.message);
})