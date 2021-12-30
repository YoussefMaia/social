const express = require('express');
const app  = express()

// Get routes
const user = require('./api/user')
const category = require('./api/category')


const PORT = process.env.PORT || 5050;

app.use('/api/user', user)
app.use('/api/category', category)


app.listen(PORT, () => console.log("Server is running on port "+ PORT))