module.exports = function () {
	$.gulp.task('fonts', function(){
		return $.gulp.src('src/app/fonts/*.*')
		.pipe($.gulp.dest('build/fonts'))
		.on('end', $.browserSync.reload);
	});
}