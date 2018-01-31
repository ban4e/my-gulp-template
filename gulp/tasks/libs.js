module.exports = function () {

	$.gulp.task('libs:js', function() {
		return $.gulp.src($.mainBowerFiles('**/*.js'))
			.pipe($.gulp.dest('build/js/libs'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});


	$.gulp.task('libs:css', function() {
		return $.gulp.src($.mainBowerFiles('**/*.css'))
			.pipe($.gulp.dest('build/css/libs'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
}