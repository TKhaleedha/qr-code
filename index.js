const express = require("express");
const app = express();
const bp = require("body-parser");
const qr = require("qrcode");
app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());



app.get("/", (req, res) => {
    res.render("index");
});


app.post("/generate", (req, res) => {
    const url = req.body.url;

    if (url.length === 0) res.send("Please provide a valid URL Data!");
    
    
    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error!!!!!!!");
      
        res.render("generate", { src });
    });
});

const port = 4000;
app.listen(port, () => console.log("Server running at 4000"));