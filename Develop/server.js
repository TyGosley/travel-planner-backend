const express = require('express'); // TODO
const routes = require('./routes');
const sequelize = require('./config/connection'); // TODO

const app = express(); // TODO
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db (via Sequelize) and listen on the server
// TODO
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });