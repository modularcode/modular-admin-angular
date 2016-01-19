var path = require('path');

var config = require('../config');

var rootDir 	= config.rootDir;
var srcDir 		= config.srcDir;
var destDir 	= config.destDir;

/***********************************************
*		Application script files
************************************************/

	/*
		Specifiing the source this way means:

		"take all .ts files except /_main/main.ts file 
		and then take /_main/main.ts file"

		This ensures that main.ts file is loaded in the end.
	*/

	exports.scripts = {
		src: [
			srcDir + "/config.ts",
			srcDir + "/**/!(config|main)*.ts",
			srcDir + "/main.ts",
			"!" + srcDir + "/_vendor/**"
		],
		dest: destDir + "/js"
	};

/***********************************************
*		Application style files
************************************************/

	exports.styles = {
		src: [
			srcDir + "/_main.scss",
			srcDir + "/**/!(_main|_variables|*-theme)*.scss",
		],
		dest: destDir + "/css/"
	};

/***********************************************
*		Application theme files
************************************************/

	exports.themes = {
		src: srcDir + "/**/*-theme.scss",
		dest: destDir + "/css/"
	};


/***********************************************
*		Application page files
************************************************/

	/*
		Each page file represents a page which will be rendered into .html page.
	*/

	exports.pages = {
		src: srcDir + "/**/*.html",
		dest: destDir + "/"
	};


/***********************************************
*		Application asset files
************************************************/

	exports.assets = {
		src: srcDir + "/_assets/**/*",
		dest: destDir + "/assets"
	};