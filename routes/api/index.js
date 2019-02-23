const router = require("express").Router();

// Require routes from within api directory
// const beerRoutes = require("./beers"); // example
const userRoutes = require("./users"); 
const flashCardRoutes = require("./flashCards"); 

// Routes -- Appends api path to .../api/...
// router.use("/beers", beerRoutes); //example
router.use("/users", userRoutes); 
router.use("/flashcards", flashCardRoutes); 

module.exports = router;