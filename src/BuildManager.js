'use strict';

var Build = require('./Build');

class BuildManager {
	constructor() {
		this._id = null;
		this._builds = [];
	}

	createBuild(name, options) {
		var build = new Build(name, options);
		this._builds.push(build)
		return build;
	}
}

module.exports = BuildManager;
