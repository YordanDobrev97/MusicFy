
const songService = {
    getAll: function() {
        return fetch('http://localhost:3001/song/all', {
            method: "GET",   
        })
        .then(r => r.json())
        .then(songs => {
            return {...songs}
        });
    },

    getMostLikes: async function() {
        const songs = await this.getAll();
        const result = [];
        
        Object.keys(songs).map((key) => {
            result.push(songs[key]);
        });

        result.sort((s1, s2) => {
            return s2.likes - s1.likes
        });

        return result;
    },

    getRandomSongs: async function() {
        const songs = await this.getAll();
        const result = [];
        
        Object.keys(songs).map((key) => {
            result.push(songs[key]);
        });

        for (let i = 0; i < result.length - 1; i++) {
            let j = i + Math.floor(Math.random() * (result.length - i));
    
            let temp = result[j];
            result[j] = result[i];
            result[i] = temp;
        }
        
        return result;
    }
}

module.exports = songService;