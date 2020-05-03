let express = require("express");
let vjm     = require("vue-jwt-mongo");
let multer  = require("multer");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost", dbName = "photofeed";

let app = express();

function getKey() {
	return "V7gC62iNov04S1e8zQPENPrIghNgXPByOX7zXo4JRG5r6QbuWeZJRpHiB46luSl";
}

let vjmServer = vjm.Server({
	mongoUrl: url + "/" + dbName,
	jwtSecret: getKey()
});

app.use(express.static("../client"));

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler);

mongoClient.connect(url, function(err, client) {
	database = client.db(dbName);
	app.listen(8080);
});
