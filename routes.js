const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

require('dotenv').config();

router.route('/').get((req,res) => res.send('Hello World!!!'));
router.route('/vote').post((req,res) => {
    const timeStamp = Date.now();
    console.log(req.body, timeStamp);

    const body = {
        "Body": req.body.vote
    };

    const headers = {
        "AccessKey": process.env.AWS_ACCESS_KEY,
        "SecretKey": process.env.AWS_SECRET_KEY
    };
    
    const url = process.env.AWS_API_URL;

    fetch(url, {
        method: 'post',
        body:    JSON.stringify(body),
        headers,
    })
        .then(res => res.json())
        .then(json => console.log(json));
    res.status(200).json(req.body);
})

module.exports = router;