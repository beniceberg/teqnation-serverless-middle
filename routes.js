const express = require('express');
const router = express.Router();

router.route('/').get((req,res) => res.send('Hello World!!!'));
router.route('/vote').post((req,res) => {
    const timeStamp = Date.now();
    console.log(req.body, timeStamp);
    res.status(200).json(req.body);
})

module.exports = router;