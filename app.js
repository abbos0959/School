const express = require("express");
const app = express();
app.use(express.json());

const CountryRouter = require("./routes/CountryRoutes");
const DistrictRouter = require("./routes/DistrictRouter");
const GroupRouter = require("./routes/GroupRouter");
const SchoolRouter = require("./routes/schoolRouter");
const StudentRouter = require("./routes/studentRouter");

app.use("/api/v1/country", CountryRouter);
app.use("/api/v1/district", DistrictRouter);
app.use("/api/v1/group", GroupRouter);
app.use("/api/v1/country", SchoolRouter);
app.use("/api/v1/student", StudentRouter);

module.exports = app;

//kFAQxt2neFzIVVSb
