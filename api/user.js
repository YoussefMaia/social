const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
        res.json({
            status: 200,
            message: "Connection and getting data has successfully"
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).send("Server error")
    }
})

module.exports = router;
