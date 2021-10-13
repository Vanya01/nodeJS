const mongoose = require('mongoose');
const express = require('express');

const {MONGO_CONNECT_URL, PORT} = require('./Config/config');

const app = express();

mongoose.connect(MONGO_CONNECT_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {userRoute,authRoute} = require('./routes/index');

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
