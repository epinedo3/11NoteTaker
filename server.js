// Declaring Routes
const express = require('express');
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')
const app = express();
let PORT = 3001

// Declaring Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(html_routes);
app.use(api_routes);
app.use(express.static("public"));

// Starting Server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);