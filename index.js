const express = require('express');
const app  = express()

// Get routes
const user = require('./api/user')

const PORT = process.env.PORT || 5050;

app.use('/api/user', user)



app.listen(PORT, () => console.log("Server is running on port "+ PORT))