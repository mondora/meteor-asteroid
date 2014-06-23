Package.describe({
	summary: "Configure Meteor to be used with Asteroid"
});

Package.on_use(function (api) {
	api.use(["logging", "oauth"], "server");
	api.add_files("lib/asteroid.js", "server");
});