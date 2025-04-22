const express = require("express");
const app = express();
const sequelize = require("./config/database");
const routes = require("./routes/web");

require("dotenv").config();
app.use(express.json());

// Routes
app.use("/", routes);

// Sync DB
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
