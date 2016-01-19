module.exports.task = function(gulp, plugins, paths) {
	gulp.src(paths.app.pages.src)
		.pipe(gulp.dest(paths.app.pages.dest));
};