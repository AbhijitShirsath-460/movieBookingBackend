const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.artists = require("./artist.model.js")(mongoose);
db.genres = require("./genre.model.js")(mongoose);
db.movies = require("./movie.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);


module.exports = db;
