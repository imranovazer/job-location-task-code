const { default: mongoose } = require("mongoose");

const LocationSchema = mongoose.Schema({
  name: String,
  icon: String,
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = {
  Location,
};
