

async function pingRequest(req, res) {
    const response =  this.testService.pingCheck();
    return res.send({data : response});
}

module.exports = {pingRequest};