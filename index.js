const express = require('express');
const app  = express()
const cors   = require('cors')

// Get routes
const user = require('./api/user')
const category = require('./api/category')


app.use(cors({
    origin: [
        "http://localhost:3000", 
        "http://localhost:3001", 
        "http://localhost:3003"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

const PORT = process.env.PORT || 5050;

app.use('/api/user', user)
app.use('/api/category', category)


app.listen(PORT, () => console.log("Server is running on port "+ PORT))