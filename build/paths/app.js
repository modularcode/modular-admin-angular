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
		Pages can extend layouts.

	*/

	exports.pages = {
		src: srcDir + "/**/*-page.hbs",
		dest: destDir + "/"
	};


/***********************************************
*		Application template files
************************************************/
	
	/*
		All template files in application.
		Those should registered as handlebars partials
		in order to use feature like includes or layouts
	*/

	exports.templates = {
		src: srcDir + "/**/*.hbs",
		dest: destDir + "/templates"
	};

/***********************************************
*  	Application handlebars helpers files
************************************************/

	/*
		Handlebars helpers files
		Read more: http://handlebarsjs.com/block_helpers.html
	*/

	exports.helpers = {
		src: [
			srcDir + "/**/*-helper.js",
			rootDir + '/node_modules/handlebars-layouts/index.js',
		],
		dest: destDir + "/templates"
	};


/***********************************************
*		Application layout files
************************************************/

	/*
		Layouts are used for "wrapping" the content of individual pages with common elements, 
		such as the <head></head> and footer sections, which usually contain necessities 
		such as <link> and <script> tags.
	*/

	exports.layouts = {
		src: srcDir + "/**/*-layout.hbs",
		dest: destDir + "/templates"
	};

/***********************************************
*		Application asset files
************************************************/

	exports.assets = {
		src: srcDir + "/_assets/**/*",
		dest: destDir + "/assets"
	};