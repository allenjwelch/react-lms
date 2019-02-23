const router = require("express").Router();
// var connection = require("../config/connection.js");

// Completes api path to .../api/flashcards/...
router.get("/", function(req, res) {
    // connection.query("SELECT * FROM tasks;", function(err, data) {
    //     if (err) throw err;
    // }); 
    console.log("FlashCards API has been hit");
    res.send([
        {
            id: 1,
            name: "card 1", 
        }, 
        {
            id: 2,
            name: "card 2", 
        }, 
    ]);
});

module.exports = router;
