var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    notify  = require('gulp-notify');


var paths = {
  src: 'src/*.js'
};

gulp.task('lint', function(){
  return gulp.src(paths.src)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(notify({message: 'Lint done'}));
});


gulp.task('build', ['lint']);

gulp.task('watch', function(){
  gulp.watch(paths.src, ['build']);
});

gulp.task('default', ['build', 'watch']);