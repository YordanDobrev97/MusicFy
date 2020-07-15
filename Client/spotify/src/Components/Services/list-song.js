
const songService = {
    getAll: function() {
        return fetch('http://localhost:3001/song/all', {
            method: "GET",   
        }).then(r => r.json()).then(data => {
            return data;
        });
    }
}

module.exports = songService;