const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User id for the Submission is Missing"],
  },
  problemId: {
    type: String,
    required: [true, "Code for the Submission is Missing"],
  },
  code: {
    type: String,
    required: [true, "Code for the Submission is Missing"],
  },
  language: {
    type: String,
    required: [true, "Language for the Submission is Missing"],
  },
  status: {
    type: String,
    enum: ["Pending", "Success", "RE", "TLE", "MLE", "WA"],
    default: "Pending",
  },
});

const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
