const gulp = require('gulp');
const webpack = require('webpack-stream');


gulp.task('webpack:dev', () => {
    gulp.src('app/js/entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
    gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('css:dev', () => {
gulp.src('app/css/**/*.css')
.pipe(gulp.dest('./build'));
});


// gulp.task('css:dev', () => {
// gulp.src('app/css/style.css')
// .pipe(gulp.dest('./build'));
// });

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'css:dev']);
gulp.task('default', ['build:dev']);
