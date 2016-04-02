# gulp-coloor

Gulp plugin for [Coloor](https://github.com/krasimir/coloor) syntax.

## Installation

`npm i gulp-coloor -D`

## Usage

```js
var gulp = require('gulp');
var coloor = require('gulp-coloor');

gulp.task('decorate-html', function() {
  gulp.src('src/*.*') // your html-ish files
    .pipe(coloor({
      sizeW: 3, // 3px width of the image preview. The height is calculated automatically.
      images: [__dirname + '/photos'] // location of the image files
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['decorate-html']);
```