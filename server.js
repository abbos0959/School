require("dotenv").config();
const Db = require("./config/db");
Db();

const app = require("./app");

app.listen(process.env.PORT, () => {
   console.log("server ishladi");
});
