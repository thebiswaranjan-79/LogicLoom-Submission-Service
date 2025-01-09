const SubmissionProducer = require("../producers/submissionQueueProducer");

class SubmissionService {
  constructor(submissionRepository) {
    // inject here
    this.submissionRepository = submissionRepository;
  }

  async pingCheck() {
    return "PONG";
  }

  async addSubmission(submissionPayload) {
    const submission =
      this.submissionRepository.createSubmission(submissionPayload);

    if (!submission) {
      // TODO :  Add error Handling Here
      throw { message: "Not able to Create Submission" };
    }

    console.log(submission);
    const response = await SubmissionProducer(submission);
    return { queueResponse: response, submission };
  }
}

module.exports = SubmissionService;
