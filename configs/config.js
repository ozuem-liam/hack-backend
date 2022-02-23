require("dotenv").config();
const config = {
    serverPort: process.env.PORT || 5000,
    database: {
      endPoint: process.env.MONGO_URI,
    },
  };
  
  module.exports = config;