var gulp = require('gulp');
var coloor = require('../');
var plumber = require('gulp-plumber');

gulp.task('decorate-html', function() {
  gulp.src('src/*.*')
    .pipe(plumber())
    .pipe(coloor({
      sizeW: 3, // 3px width of the image preview
      images: [__dirname + '/photos'] // location of the image files
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['decorate-html']);