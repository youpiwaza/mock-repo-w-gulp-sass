// // Constants

// Plugins ressources
const {
  dest,
  parallel,
  src,
  task
} = require('gulp');
const sass = require('gulp-sass');

// // Sub-tasks

// Copy all assets to dist
task('copy-assets', () => src(['src/**/*.*', '!node_modules/**', '!**/*.scss'])
  .pipe(dest('dist/')));

task('sass', function() {
  return src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/'));
});

// // Tasks

// Default tesk, executed when using 'gulp'
//    Capy all assets to dist
task('default', parallel('copy-assets', 'sass'));
