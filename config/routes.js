const express = require("express");
const router = express.Router();

const tweetsController = require('../controllers/tweets.controller')
const usersController = require('../controllers/users.controller')
const sessionMiddleware = require('../middlewares/session.middleware')

router.get('/', (req, res) => { res.redirect('/tweets') })

router.get('/login', sessionMiddleware.isNotAuthenticated, usersController.login);
router.post("/login", sessionMiddleware.isNotAuthenticated, usersController.doLogin);
router.get("/signup", sessionMiddleware.isNotAuthenticated, usersController.signup);
router.post("/users", sessionMiddleware.isNotAuthenticated, usersController.createUser);
router.post("/logout", sessionMiddleware.isAuthenticated, usersController.logout);
router.get("/tweets", sessionMiddleware.isAuthenticated, tweetsController.list);

module.exports = router;
