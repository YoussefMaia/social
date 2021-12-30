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
        const selectCategory = "SELECT * FROM category LEFT JOIN city ON category.city_ID = city.city_ID ";
        db.query (selectCategory, (err, result) => {
            if(!err)
                res.send(result)
            else
                res.send(err)
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
