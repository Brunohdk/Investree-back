const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 9001;
const userRoute = require('./controllers/user')
const dataTableRoute = require('./controllers/dataTable')

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { 
    useNewUrlParser: true, useUnifiedTopology: true 
})
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB conneciton established successfully')
})

app.use('/user', userRoute)
app.use('/asset', dataTableRoute)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});