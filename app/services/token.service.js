const axios = require('axios').default
const qs = require('querystring')

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}


const getToken = async() => {
    let token = ''
    const promise = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify({
            grant_type: "client_credentials",
            client_id: "208670cf895e4c5ab83484fcc7d03429",
            client_secret: "38d1b4992ecf40e79c92383caa29a1f6",
        }),
        config
    )
    token = promise.data
    return token.access_token
}

module.exports = getToken
