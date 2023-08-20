require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const db_url = process.env.DB_URL;
//Creating a mongodb client
const mongoClient = new MongoClient(db_url);

module.exports = {
  mongoClient,
  url: db_url,
  database: "files_db",
  bucketName: "MyFiles",
};
