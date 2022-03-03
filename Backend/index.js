const connectDB = require('./startup/db')
const express = require('express');
const cors = require('cors')
const users = require('./routes/users')
const clubs = require('./routes/clubs')
const app = express();


connectDB()
app.use(cors())
app.use(express.json());
app.use('/api/users', users);
app.use('/api/clubs', clubs);

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});