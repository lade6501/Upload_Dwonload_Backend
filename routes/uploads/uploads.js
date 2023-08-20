const express = require("express");
const uploadRouter = express.Router();

const { uploadFile, getAllFiles } = require("../../controllers/upload.js");

uploadRouter.get("/files", getAllFiles);
uploadRouter.post("/upload", uploadFile);

module.exports = uploadRouter;
