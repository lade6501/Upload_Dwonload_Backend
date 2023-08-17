require("dotenv").config();
const db_url = process.env.DB_URL;

module.exports = {
  url: db_url,
  database: "files_db",
  bucketName: "MyFiles",
};
