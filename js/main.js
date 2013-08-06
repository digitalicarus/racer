/*global require,requirejs*/
requirejs.config({
	paths: {
		"class": "vendor/class",
		"aug": "vendor/aug",
		"text": "vendor/rplug/text"
	},
	shim: {
		"aug": { exports: "aug" },
		"class": { exports: "Class" }
	}
});

require(['game'], function (Game) {});
