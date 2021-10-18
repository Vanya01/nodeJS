module.exports = {
    MONGO_CONNECT_URL: process.env.MONGO_CONNECT_URL || 'mongodb://localhost:27017/second',
    PORT: process.env.PORT || 5000,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || 'secret-access',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'secret-refresh'
};
