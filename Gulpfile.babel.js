import gulp from 'gulp';
import stylus from 'gulp-stylus';
import plumber from 'gulp-plumber';
import cssnano from 'cssnano';
import postcss from 'gulp-postcss';
import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';


gulp.task('styles', ()=> {
	gulp.src('./src/stylus/main.styl')
	.pipe(plumber())
  .pipe(stylus({
    use:[
      poststylus([ autoprefixer({ browsers: ["last 3 version", "> 1%", "ie 8"] })]),
    ]
  }))
  .pipe(postcss([
  	cssnano()
  ]))
  .pipe(gulp.dest('./build/css/'))
});

gulp.task('watch', ()=> {
  gulp.watch('./src/stylus/*.styl', ['styles']);
});


gulp.task('default', ['watch']);