const Information = require('../models/information');

const information_index = (req, res) => {
    Information.find()
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    information_index,
}