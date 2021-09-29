const express = require("express");

const app = express();

app.get("/api/v1", (request, response) => {
    response.json({
        message: "Testing Heroku Deploy"
    });
});


app.get("/api/v1/users", (request, response) => {
    response.json([
        {
            id: 1,
            firtname: "Juan",
            lastmane: "Ceballos",
            email: "jacu29@gmail.com"
        }
    ]);
});



module.exports = app;