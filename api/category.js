const express = require('express')
const router = express.Router()

router.get('/category', async (req, res) => {
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

module.exports = router;
