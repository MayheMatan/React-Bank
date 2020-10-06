const express = require('express');
const router = express.Router()
const Transcation = require('../model/Transcation');

router.get("/transactions", (req, res) => {
    Transcation.find({}).then(transactions => res.send(transactions))
});

router.post("/transaction", (req, res) => {
    const transaction = new Transcation(req.body);
    transaction.save();
    res.end();
})

router.delete("/transaction/:id", (req, res) => {
    const { id } = req.params
    Transcation.findByIdAndDelete(id).then(result => res.end());
})

module.exports = router;
