'use strict';

class Build {
	constructor(name) {
		this._id = null;
		this.name = name;
	}

	start(tasks) {
		for (var task in tasks) {
			tasks[task].start();
		}
	}

	stop(tasks) {
		for (var task in tasks) {
			tasks[task].stop();
		}
	}

	restart(tasks) {
		for (var task in tasks) {
			tasks[task].restart();
		}
	}

	destroy(tasks) {
		for (var task in tasks) {
			tasks[task].destroy();
		}
	}
}

module.exports = Build;
