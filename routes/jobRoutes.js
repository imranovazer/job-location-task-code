const express = require("express");
const jobController = require("../controllers/jobController.js");
const router = express.Router();

router.route("/").get(jobController.getJobs).post(jobController.createJob);
router
  .route("/:id")
  .get(jobController.getJobById)
  .delete(jobController.deleteJobById);

router
  .route("/getJobsByLocationId/:locationId")
  .get(jobController.getJobsByLocationId);

module.exports = router;
