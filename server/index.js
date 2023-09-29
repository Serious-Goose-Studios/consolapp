// server/index.js

const express = require("express");
var cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
