const gulp = require("gulp")
const sourcemaps = require("gulp-sourcemaps")
const watchsass = require("gulp-watch-sass")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const mqpacker = require("css-mqpacker")
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const logger = require('gulp-logger')

var ignoredFolders = "node_modules, .git"
var autoprefixerVersion = "last 2 versions"
var cssnanoConfig = {preset: 'default'}

gulp.task("watch", () => watchsass(
    ["./**/*.scss", "!./{" + ignoredFolders + "}/**/*"],
    {base: "./"}
  )
  .pipe(plumber({ errorHandler: function(err) {
    notify.onError({
      title: "Error in " + err.plugin,
      text: 'error : `' + err.messageOriginal + '` on line ' + err.line + ' of ' + err.relativePath + '\n look at the console for more details'
    })(Error('\n' + err.messageFormatted));
  }}))
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(logger({
        before: 'Compiling scss file(s)...',
        extname: '.scss'
    }))
  .pipe(postcss([ autoprefixer({browsers: [autoprefixerVersion]}), mqpacker(), cssnano(cssnanoConfig) ]))
  .pipe(notify({title: 'SCSS compilling complete !', text: 'SCSS file(s) has been compiled with success !', onLast: false}))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("./"))
  .pipe(logger({
        before: 'Creating files...',
        after: 'Files has been created with success !'
    }))
);
