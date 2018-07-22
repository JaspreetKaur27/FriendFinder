var path = require("path");

module.exports = (app) => {

    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/calculation.js", (req, res) => {
        res.sendFile("calculation.js", {root: './'});
    });
};