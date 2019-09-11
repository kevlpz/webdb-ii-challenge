const express = require('express');
const router = express.Router();
const Cars = require('../db/carsDb.js');

router.get('/', (req, res) => {
    Cars.get()
        .then(car => res.status(200).json(car))
        .catch(err => {
            console.log(err);
            res.status(500);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Cars.getById(id)
        .then(car => res.status(200).json(car))
        .catch(err => {
            console.log(err);
            res.status(500);
        });
});

router.post('/', (req, res) => {
    Cars.insert(req.body)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(err => {
            console.log(err);
            res.status(500);
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Cars.remove(id)
        .then(() => res.status(200).end())
        .catch(err => {
            console.log(err);
            res.status(500);
        });
});

module.exports = router;