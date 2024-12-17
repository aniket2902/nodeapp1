const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send("App Version 22.0")
})

app.listen(4000, '0.0.0.0', ()=>{
    console.log("Server started at port 4000")
})
