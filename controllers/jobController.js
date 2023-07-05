const { Job } = require("../models/Job");

const JobLocation = require("../models/JobLocation");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(201).json({
      status: "success",
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);

    res.status(201).json({
      status: "success",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.deleteJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);

    res.status(201).json({
      status: "success",
      data: job,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.createJob = async (req, res) => {
  try {
    const { title, summary, description, minSalary, maxSalary } = req.body;

    const newJob = await Job.create({
      title,
      summary,
      description,
      maxSalary,
      minSalary,
    });

    res.status(201).json({ status: "sucess", data: newJob });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getJobsByLocationId = async (req, res) => {
  try {
    const { locationId } = req.params;
    console.log(req.params);
    const jobLocation = await JobLocation.find({
      locationId: locationId,
    }).populate("jobId");
    res.status(201).json({
      status: "sucess",
      data: jobLocation,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
