const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req,res) => {
    const jasonNotes = JSON.parse(fs.readFileSync('db/db.json'));
    res.json(jasonNotes);
})

router.post('/notes',(req,res) => {
    const userNote = req.body;
    const jasonNotes = JSON.parse(fs.readFileSync('db/db.json'));
    userNote.id = Date.now();
    jasonNotes.push(userNote);
    fs.writeFileSync('db/db.json',JSON.stringify(jasonNotes));
    res.json(jasonNotes);
})












module.exports = router;