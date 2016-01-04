var typescript = require('typescript');

module.exports.task = function(gulp, plugins, paths) {

	tsResult = gulp.src(paths.app.scripts.src)
	.pipe(plugins.typescript({
	    typescript: typescript,
	    module: 'commonjs',
	    target: 'ES5',
	    emitDecoratorMetadata: true,
	    declarationFiles: false,
	    noExternalResolve: true
	}));

	tsResult.js
	.pipe(plugins.concat('app.js'))
	.pipe(gulp.dest(paths.app.scripts.dest));
};