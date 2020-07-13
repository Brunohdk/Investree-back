const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true, useUnifiedTopology: true 
})

mongoose.set('useCreateIndex', true);

module.exports = mongoose;