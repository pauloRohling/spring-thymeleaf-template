const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const watch = require("gulp-watch");
const sass = require("sass");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const tailwindcssForms = require("@tailwindcss/forms");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const webpack = require("webpack-stream");
const compiler = require("webpack");
const webpackConfig = require('./webpack.config.js');

const sassCompiler = gulpSass(sass)

gulp.task("sass", () => {
  return gulp.src("./scss/**/*.scss")
  .pipe(sassCompiler({outputStyle: "compressed"}).on("error",
      sassCompiler.logError))
  .pipe(postcss([tailwindcss, tailwindcssForms]))
  .pipe(uglifycss())
  .pipe(concat("styles.css"))
  .pipe(gulp.dest("./../resources/static/dist"));
});

gulp.task("webpack:build", () => {
  return gulp.src("./app/index.js")
  .pipe(webpack(webpackConfig, compiler))
  .pipe(gulp.dest("./../resources/static/dist"));
});

gulp.task("build", gulp.parallel("sass", "webpack:build"));

gulp.task("watch", () => {
  const watcher = watch(["./app/**/*.js", "./scss/**/*.scss",
    "./../resources/templates/**/*.html"]);
  watcher.on('change', gulp.series("build"));
});

gulp.task('default', gulp.parallel("build", "watch"));

// gulp.task("default", gulp.series("sass"));