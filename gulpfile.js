const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const webpack = require('webpack-stream');
const KarmaServer = require('karma').Server;
const maps = require('gulp-sourcemaps');

var paths = {
  server: ['lib/**/*.js', 'model/**/*.js', 'server/**/*.js', 'index.js', 'gulpfile.js'],
  client: ['front_end/app/**/*.js', 'front_end/gulpfile.js'],
  test: ['test/**/*test.js']
};

// lint tasks
gulp.task('lint:server', () => {
  return gulp.src(paths.server)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:client', () => {
  return gulp.src(paths.client)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint', ['lint:server', 'lint:client']);

// build test task
gulp.task('webpack:test', () => { // ['lint'],
  return gulp.src('test/unit/test_entry.js')
  .pipe(webpack({
    devtool: 'source-map',
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('./test'));
});

// test tasks
gulp.task('mocha', () => {
  return gulp.src(paths.test)
    .pipe(mocha());
});

gulp.task('karma', ['webpack:test'], (done) => {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

// gulp.task('default', ['lint:test', 'lint:nontest', 'mocha']);
