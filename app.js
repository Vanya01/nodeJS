const mongoose = require('mongoose');
const express = require('express');

const {MONGO_CONNECT_URL, PORT} = require('./config/config');

const app = express();

mongoose.connect(MONGO_CONNECT_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {userRoute, authRoute} = require('./routes/index');

app.use('/users', userRoute);
app.use('/auth', authRoute);
// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
