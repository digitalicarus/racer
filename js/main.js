/*global require,requirejs*/
requirejs.config({
	paths: {
		"class": "vendor/class",
		"aug": "vendor/aug",
		"box2d": "vendor/box2d",
		"text": "vendor/rplug/text"
	},
	shim: {
		"aug": { exports: "aug" },
		"box2d": { exports: "Box2D" },
		"class": { exports: "Class" }
	}
});

require(['game'], function (Game) {});
