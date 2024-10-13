const express = require('express');
const router = express.Router();

// Render the Terms page
router.get('/', (req, res) => {
    res.render('terms', { title: 'Terms' });
});

module.exports = router;
