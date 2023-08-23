require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { User, Doctor, Appointment, Review } = require('./routes/index')
const { appConnection } = require('./utils/appConnection')

const app = express();
const PORT = process.env['PORT'];
app.use(cors());
app.use(express.json());

app.use('/user', User);
app.use('/doctor', Doctor);
app.use('/appointment', Appointment);
app.use('/review', Review);

app.get('/', (req, res) => {
    res.send("Welcome to the server of Medicare Booking.")
});

app.use('*', (req, res) => {
    res.status(404).send("Error 404 - Page not found.")
});

app.listen(PORT, () => appConnection(PORT));