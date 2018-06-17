const gulp = require("gulp")
const sourcemaps = require("gulp-sourcemaps")
const watchsass = require("gulp-watch-sass")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")

gulp.task("sass:watch", () => watchsass(
    ["./**/*.scss", "!./node_modules/**/*"],
    {base: "./"}
  )
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss([ autoprefixer({browsers: ['last 2 versions']}), cssnano() ]))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("./")));
