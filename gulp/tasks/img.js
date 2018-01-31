module.exports = function () {
	$.gulp.task('img:dev', function(){
		return $.gulp.src('src/app/img/**/*.{png,jpg,gif}')
			.pipe($.gulp.dest('build/img'));
	});


	$.gulp.task('img:build', function(){
		return $.gulp.src('src/app/img/**/*.{png,jpg,gif}')
			.pipe($.tinypng('D92qTKJQiP6E5b_4g3rnI45yxVM5jD7T'))
			.pipe($.gulp.dest('build/img'));
	});

}
