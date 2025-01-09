const {ATLAS_DB_URL, NODE_ENV} = require('./serverConfig');
const {mongoose } = require('mongoose');

async function connectToDB() {
    try {
        if(NODE_ENV == "development"){
            await mongoose.connect(ATLAS_DB_URL);
            console.log("Mongo Db Connected")
        }
    } catch (error) {
        console.log('Unable to Connect to the DB Server');
        console.log(error);
    }
}

module.exports = connectToDB;