const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'X6oTURID#1Yfh0vTHiEIH_YCXVg2Z63DHd8CJ8qe89xkDgtFGnEg', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94750122621',    // Enter Your Owner Number
};
