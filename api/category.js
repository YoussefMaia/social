const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "sql11.freemysqlhosting.net",
    user: "sql11462320",
    password: "VM52ymnmGq",
    database: "sql11462320"
})

router.get('/', async (req, res) => {
    try{
        res.json({
            status: 200,
            message: "Category has been downloaded"
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).send("Server error")
    }
})

router.get('/add', async (req, res) => {
    try{
        res.json({
            status: 200,
            message: "add category "
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).send("Server error")
    }
})


module.exports = router;
