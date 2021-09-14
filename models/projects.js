const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true,
    },
    githubRepository: {
        type: String,
        required: true,
    },
    techStack: {
        type: Array,
        required: true,
    }
})

const Projects = mongoose.model('Projects', projectSchema);

module.exports = Projects;