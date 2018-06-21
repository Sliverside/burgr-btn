const gulp = require("gulp")
const sourcemaps = require("gulp-sourcemaps")
const watchsass = require("gulp-watch-sass")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const mqpacker = require("css-mqpacker")
const autoprefixer = require("autoprefixer")
const cleancss = require("gulp-clean-css")
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const logger = require('gulp-logger')

var ignoredFolders = "node_modules, .git"
var autoprefixerVersion = "last 2 versions"

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
  .pipe(postcss([ mqpacker(), autoprefixer({browsers: [autoprefixerVersion]}) ]))
  .pipe(cleancss({debug: true, level: 2}, (details) => {
    console.log(`[??:??:??] 'cleancss' minify file from ${details.stats.originalSize}mb to ${details.stats.minifiedSize}mb`)
  }))
  .pipe(notify({title: 'SCSS compilling complete !', text: 'SCSS file(s) has been compiled with success !', onLast: false}))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("./"))
  .pipe(logger({
        before: 'Creating files...',
        after: 'Files has been created with success !'
    }))
);
