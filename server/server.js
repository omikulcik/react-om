const path = require("path");
const express = require ("express");
const app = express();
const PublicPath = path.join(__dirname, "..", "public");
const port = proces.env.PORT || 3000;

app.use(express.static(PublicPath));
app.get("*",(req, res)=>{
res.sendFile(path.join(PublicPath, "index.html"))
})
app.listen(port, ()=>{console.log("Server is up")})