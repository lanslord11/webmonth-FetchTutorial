let express = require("express");
let app = express();
let cors = require("cors");
let port = 8000;
let document = [
    { username: "piyuss", email: "piyuss@gmail.com" },
    { username: "neha", email: "neha@gmail.com" }
];
app.use(cors());
app.get("/", (req, res) => {
    res.send(document);
})

app.listen(port, () => {
    console.log("running on port" + port);
})