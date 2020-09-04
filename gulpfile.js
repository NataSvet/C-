var gulp = require("gulp"),
  sass = require("gulp-sass"),
  csso = require("gulp-csso"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  concat = require("gulp-concat"),
  sourcemaps = require("gulp-sourcemaps");

gulp.task("scss", function () {
  return gulp
    .src("./_build/scss/*scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer({
          cascade: false,
        }),
      ])
    )
    .pipe(csso())
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./css/"));
});

gulp.task("watch", function () {
  gulp.watch("./_build/scss/*scss", gulp.series("scss"));
});

gulp.task("default", gulp.series("scss", "watch"));
