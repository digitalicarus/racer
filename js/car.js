define(['shared', 'text!../data/cars/car1.json'], function (Shared, car1str) {
	var carData = JSON.parse(car1str);

	console.log(carData);
	
	function Car (params) {
		params = params || {};

		var color = params.color || "red"
		,   scale = params.scale || 1
		,   pos   = {}
		,	angle = params.angle || 0
		;

		pos.x = params.x || Shared.canvas.width  >> 1;
		pos.y = params.y || Shared.canvas.height >> 1;
		
	}

	Car.prototype.draw = function () {
	};

});
