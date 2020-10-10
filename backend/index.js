const express = require('express');

const app = express();
app.use(() => {
    console.log("express loaded");
    console.log("express loaded again");
    console.log("express loaded triple");
})

app.listen(3300);