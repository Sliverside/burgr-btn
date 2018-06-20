const gulp = require("gulp")
const sourcemaps = require("gulp-sourcemaps")
const watchsass = require("gulp-watch-sass")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

var ignoredFolders = "node_modules, .git"
var autoprefixerVersion = "last 2 versions"

gulp.task("watch", () => watchsass(
    ["./**/*.scss", "!./{" + ignoredFolders + "}/**/*"],
    {base: "./"}
  )
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss([ autoprefixer({browsers: [autoprefixerVersion]}), cssnano() ]))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("./")));
