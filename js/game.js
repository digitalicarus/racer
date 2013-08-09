define(['shared', 'keys', 'wee', 'car'], function (Shared, Keys, Wee, Car) {
    var car = new Car();

	// some global canvas stuff
	Shared.ctx.lineCap = 'square';
	Shared.ctx.lineJoin = 'miter';

	Keys.on('w', function (e) {
		car.accel();
	});
	Keys.on('s', function (e) {
		car.decel();
	});
	Keys.on('a', function (e) {
		car.left();
		console.log(car.angle);
	});
	Keys.on('d', function (e) {
		car.right();
		console.log(car.angle);
	});
   

	Wee.setRender(function () {
		Shared.ctx.clearRect(0, 0, Shared.canvas.width, Shared.canvas.height);
		Keys.run();
		car.update();
		car.draw();
	});

	Wee.start();
});
