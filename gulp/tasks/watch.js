module.exports = function () {
	$.gulp.task('watch', function() {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/app/styl/**/*.styl', $.gulp.series('stylus'));
		$.gulp.watch('src/app/js/main.js', $.gulp.series('script'));
		$.gulp.watch('src/app/img/**/*.{png,jpg,gif}', $.gulp.series('img:dev'));
		$.gulp.watch('src/bower/**/*.js', $.gulp.series('libs:js'));
		$.gulp.watch('src/bower/**/*.css', $.gulp.series('libs:css'));
		$.gulp.watch('src/app/img/svg/*.svg', $.gulp.series('sprite'));
		$.gulp.watch('src/app/fonts/*.*', $.gulp.series('fonts'));
	});
}