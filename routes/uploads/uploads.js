const express = require("express");
const uploadRouter = express.Router();

const {
  uploadFile,
  getAllFiles,
  deleteFile,
} = require("../../controllers/upload.js");

uploadRouter.get("/files", getAllFiles);
uploadRouter.post("/upload", uploadFile);
uploadRouter.delete("/file/:id", deleteFile);

module.exports = uploadRouter;
