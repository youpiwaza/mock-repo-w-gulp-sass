// // Constants

// Plugins ressources
const {
  dest,
  parallel,
  src,
  task
} = require('gulp');


// // Sub-tasks

// Copy all assets to dist
task('copy-assets', () => src(['src/**/*.*', '!node_modules/**'])
  .pipe(dest('dist/')));


// // Tasks

// Default tesk, executed when using 'gulp'
//    Capy all assets to dist
task('default', parallel('copy-assets'));
