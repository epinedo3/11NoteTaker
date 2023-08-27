// Declaring Routes
const express = require('express');
const html_routes = require('./Develop/routes/html-routes')
const api_routes = require('./Develop/routes/api-routes')
const app = express();

// Declaring Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes);
app.use(api_routes);

// Starting Server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);