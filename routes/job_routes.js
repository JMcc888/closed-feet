const express = require('express')
const router = express.Router()

const { getJob, getJobs, deleteJob, editJob, editJobForm, newJob } = require('../controllers/job_controller')

const auth = require('../middleware/admin')

router.route('/').get(auth, getJobs)
router.route('/').post(newJob)
router.route('/:id').get(auth, getJob).put(auth, editJob).delete(auth, deleteJob)
router.route('/:id/edit').get(auth, editJobForm)


module.exports = router