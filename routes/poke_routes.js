/**
 * The routes to access the differernt specific pokemon 
 * 
 * @authors: Nikhil Parikh, Xavier Williams 
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /pokemon"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST requests to /pokemon"
    });
});

router.get('/:pokeID', (req, res, next) =>{
    const pokeId = req.params.pokeID;
    if (pokeId === 'special'){
        res.status(200).json({
            message: 'You have found the hidden gem'
        });
    } else {
        res.status(200).json({
            message: 'You passed some ID'
        });
    }
});

module.exports = router;