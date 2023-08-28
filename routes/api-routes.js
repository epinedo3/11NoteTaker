// 
const router = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require("fs");

// Defines GET requests to this route
router.get('/api/notes', async(req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync("db/db.json"))
    res.json(dbJson);
});

// Defines POST requests to this route
router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync("db/db.json"))
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;
