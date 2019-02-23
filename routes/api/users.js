const router = require("express").Router();
// var connection = require("../config/connection.js");

// Completes api path to .../api/users/...
router.get("/", function(req, res) {
    // connection.query("SELECT * FROM tasks;", function(err, data) {
    //     if (err) throw err;
    // }); 
    console.log("Users API has been hit");
    res.send([
        {
            id: 1,
            name: "user 1", 
        }, 
        {
            id: 2,
            name: "user 2", 
        }, 
    ]);
});

module.exports = router;
