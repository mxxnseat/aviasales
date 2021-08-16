const axios = require("axios").create({
    proxy:{
        host: "localhost",
        port: 3001
    }
})

export default axios;