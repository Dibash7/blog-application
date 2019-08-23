require('dotenv').config();

let appConfig = {
    port: process.env.PORT || 3000,
    allowedCorsOrigin: "*",
    env: "dev",
    db: {
        uri: process.env.API_URI
    },
    apiVersion: "/api/v1"
};

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion
}