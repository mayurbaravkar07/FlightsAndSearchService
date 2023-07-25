const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/cityRepository');


const setupAndStartServer = async () => {
  try {
    // Create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));



    app.listen(PORT, async () => {
      console.log(`Server started at http://localhost:${PORT}`);
      const ins = new CityRepository();
      await ins.createCity({ name: "delhi" });
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

setupAndStartServer();
