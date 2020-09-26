const axios = require('axios').default
const getToken = require('../token.service.js')
const qs = require('querystring')
 
 
async function getTracks(criteria) {
    const headers = await getHeaders()
    const data = await axios
       .get('https://api.spotify.com/v1/search', {
            headers: headers,
            params: {
                q: criteria,
                type: 'track',
                market: 'CO',
                limit: 1
            }
        }).then(res => res.data.tracks.items).then(items => {
            track = {}
            for( i in items) {
                track.name = items[i].name
                track.artista = items[i].album.artists
                track.album = items[i].album.name
                track.url = items[i].uri
                track.id = items[i].id
                track.img = items[i].album.images
            }
            return track
        }).catch(error => console.log(error))
    return data
}
 
async function getHeaders() {
   const token = await getToken()
   const config = {
       headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + token
       }
   }
   return config
}
 
module.exports = getTracks
