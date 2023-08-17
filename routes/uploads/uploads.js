const express = require("express");
const uploadRouter = express.Router();

const { getAllFiles } = require("../../controllers/upload.js");

uploadRouter.get("/files", getAllFiles);

module.exports = uploadRouter;
