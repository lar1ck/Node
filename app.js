const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json);
app.use(cors());

app.use((req,res) => {
    res.status(404).json({"Message":"Url doesn't exist"})
})