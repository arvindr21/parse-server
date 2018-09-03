Parse.Cloud.define('hello', function(req, res) {
	console.log(req.params);
	res.success('Hi' + (new Date()));
});

Parse.Cloud.define("averageStars", function(request, response) {
	// const query = new Parse.Query("Review");
	// query.equalTo("movie", request.params.movie);
	// query.find()
	// 	.then((results) => {
	// 		let sum = 0;
	// 		results = results || [{ stars: 3 }];
	// 		for (let i = 0; i < results.length; ++i) {
	// 			sum += results[i].get("stars");
	// 		}
	// 		response.success(sum / results.length);
	// 	})
	// 	.catch(() => {
	// 		response.error("movie lookup failed");
	// 	});
	response.success(5);
});