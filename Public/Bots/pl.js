var http = require("https");

var options = {
	"method": "GET",
	"hostname": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
	"port": null,
	"path": "/api/premierleague/table?season=2019-20",
	"headers": {
		"x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
		"x-rapidapi-key": "fef08f07bemsh93805ff9d47f185p1efb84jsn14450e134e60",
		"useQueryString": true
	}
};



var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();