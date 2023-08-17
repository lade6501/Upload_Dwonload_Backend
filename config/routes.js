const uploadRouter = require("../routes/uploads/uploads");

const setRoutes = (server) => {
  server.use("/api/v1", uploadRouter);
};

module.exports = setRoutes;
