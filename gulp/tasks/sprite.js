module.exports = function () {
	$.gulp.task('sprite', () => {
		return $.gulp.src('src/app/img/svg/*.svg')
		.pipe($.svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe($.cheerio({
			run: function($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode : true }
		}))
		.pipe($.GPreplace('&gt;', '>'))
		.pipe($.svgSprite({
			mode: {
				symbol: {
					sprite: "sprite.svg"
				}
			}
		}))
		.pipe($.gulp.dest('./build/img/svg/'));
	});
};
