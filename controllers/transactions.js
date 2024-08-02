const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    res.render('views/index.ejs', { transactions: currentUser.transactions, });
});

router.get('/new', async (req, res) => {
    res.render('transactions/new.ejs');
});

router.get('/index', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('transactions/index.ejs', { transactions: currentUser.transactions });
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
});

router.get('/calendar', async (req, res) => {
    res.render('transactions/calendar.ejs');
});

module.exports = router;