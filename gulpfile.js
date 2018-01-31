'use strict';

global.$ = {
	gulp: require('gulp'),
	stylus: require('gulp-stylus'),
	pug: require('gulp-pug'),
	autoprefixer: require('gulp-autoprefixer'),
	tinypng: require('gulp-tinypng'),
	notify: require('gulp-notify'),
	sourcemaps: require('gulp-sourcemaps'),
	mainBowerFiles: require('main-bower-files'),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath) ();
});


$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'stylus', 'script', 'img:dev', 'libs:js', 'libs:css'),
	$.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
	$.gulp.parallel('pug', 'stylus', 'script', 'img:build', 'libs:js', 'libs:css'),
	$.gulp.parallel('watch', 'serve')
));