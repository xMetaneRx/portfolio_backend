const Projects = require('../models/projects');

const project_index = (req, res) => {
    Projects.find()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    project_index,
}