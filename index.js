const { server } = require("./config/server");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

server
  .listen(PORT)
  .on("listening", () => {
    console.log(`✔ Application Started On ${PORT}`);
  })
  .on("error", (err) => {
    console.log("✘ Application failed to start");
    console.error("✘", err.message);
    process.exit(0);
  });
