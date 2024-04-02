const express = require("express");
const { ServerConfig, Logger } = require("./config");
const appRoutes = require("./routes/");

const app = express();

app.use("/api", appRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started a server on PORT: ${ServerConfig.PORT}`);
  // Logger.info("Successfully started the server", {});
});
