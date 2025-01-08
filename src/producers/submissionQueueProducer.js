const submissionQueue = require("../queues/submissionQueue");

module.exports = async function (payload) {
  await submissionQueue.add("SubmissionJob", payload);
  console.log("Successfully Added a New Submission Job");
};
