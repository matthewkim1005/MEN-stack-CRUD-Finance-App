const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('transactions/index.ejs', { transactions: currentUser.transactions, });
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
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

router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        req.body.starred = false;
        currentUser.transactions.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/transactions`);
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});

module.exports = router;