const express = require('express');
const router = express.Router();

// Render the Privacy Policy page
router.get('/', (req, res) => {
    res.render('privacy', { title: 'Privacy Policy' });
});

module.exports = router;
