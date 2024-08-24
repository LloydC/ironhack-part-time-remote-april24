const router = require("express").Router();
const Apartment = require('../models/Apartment.model')

router.get("/apartments", (req, res, next) => {
    Apartment.find()
            .then(apartments => {
                res.json(apartments);
            })
            .catch(err => console.error(err))
 
});

router.post("/apartments", (req, res, next) => {
    const {title, img, pricePerDay} = req.body;

    Apartment.create({ title, img, pricePerDay})
            .then(newApartment => {
                res.json(newApartment);
            })
            .catch(err => console.error(err))
})

router.get("/apartments/:apartmentId", (req, res, next) => {
    Apartment.findById(req.params.apartmentId)
            .then(apartment => res.json(apartment))
            .catch(err => console.error(err))
 
});

module.exports = router;