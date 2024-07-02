class TestService{
    constructor(){
        // inject here 
    }

    async pingCheck(){
        return 'PONG';
    }
}

module.exports = TestService;