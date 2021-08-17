const express = require("express");
const app = express();
const path = require('path');
const index = path.resolve(__dirname, "build", 'index.html');

const PORT = process.env.PORT || 5555;

app.use(express.static(path.resolve(__dirname, './build')));

app.get("/*", (req, res)=>{
    res.send(index);
});


app.listen(PORT, (e)=>{
    try{
        console.log(`App listen ${PORT}`);
    }catch(e){
        console.log(e);
    }
})