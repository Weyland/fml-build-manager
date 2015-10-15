'use strict';

var Build = require('./Build');

/**
 * BuildManager
 */
class BuildManager {

	constructor() {

		/**
		 * Private identifier.
		 * @type {Number}
		 */
		this._id = null;

		/**
		 * Private store of registered builds.
		 * @type {Array}
		 */
		this._builds = [];

		/**
		 * Private configuration for the build.
		 * @type {Object}
		 */
		this._config = {};
	}

	/**
	 * Create a new build which is basically a bunch of tasks.
	 * @param  {String} name    The name of the new build
	 * @param  {Object} options An object with configuration options
	 * @return {Build}
	 */
	createBuild(name, options) {
		var build = new Build(name, options);
		this._builds.push(build)
		return build;
	}
}

module.exports = BuildManager;
