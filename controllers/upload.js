var formidable = require("formidable");
const dbConfig = require("../config/db");
const GridFSBucket = require("mongodb").GridFSBucket;
const fs = require("fs");
const db = dbConfig.mongoClient.db(dbConfig.database);
const bucket = new GridFSBucket(db, {
  bucketName: dbConfig.bucketName,
});

const getAllFiles = (req, res, next) => {};

const uploadFile = (req, res, next) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to upload file" });
    }

    // Access the uploaded file using the 'files' object
    const file = files.file[0];
    // Create a readable stream from the uploaded file
    const stream = fs.createReadStream(file.filepath, "base64");

    // Store the file in GridFS

    const uploadStream = bucket.openUploadStream(file.originalFilename);
    stream.pipe(uploadStream);

    uploadStream.on("error", (err) => {
      console.error(err);
      return res.status(500).json({ error: "Failed to upload file" });
    });

    uploadStream.on("finish", () => {
      console.log("finish");
      return res
        .status(200)
        .json({ message: `${file.originalFilename}  uploaded successfully` });
    });
  });
};

module.exports = { getAllFiles, uploadFile };
