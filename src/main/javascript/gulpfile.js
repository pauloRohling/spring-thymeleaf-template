import gulp from "gulp";
import gulpSass from "gulp-sass";
import watch from "gulp-watch";
import sass from "sass";
import postcss from "gulp-postcss";
import tailwindcss from "tailwindcss";
import tailwindcssForms from "@tailwindcss/forms";
import uglifycss from "gulp-uglifycss";
import concat from "gulp-concat";
import webpack from "webpack-stream";
import compiler from "webpack";
import prettier from "gulp-prettier";
import webpackConfig from "./webpack.config.cjs";
import prettierConfig from "./.prettierrc.json" assert { type: "json" };
const sassCompiler = gulpSass(sass);

const DIST_PATH = "./../resources/static/dist";

gulp.task("sass", () => {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sassCompiler({ outputStyle: "compressed" }).on("error", sassCompiler.logError))
    .pipe(postcss([tailwindcss, tailwindcssForms]))
    .pipe(uglifycss())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task("html", () => {
  return gulp
    .src("./../resources/templates/**/*.html")
    .pipe(prettier(prettierConfig))
    .pipe(gulp.dest((file) => file.base));
});

gulp.task("webpack:build", () => {
  return gulp.src("./app/index.js").pipe(webpack(webpackConfig, compiler)).pipe(gulp.dest(DIST_PATH));
});

gulp.task("build", gulp.parallel("sass", "html", "webpack:build"));

gulp.task("watch", () => {
  const watcher = watch(["./app/**/*.js", "./scss/**/*.scss", "./../resources/templates/**/*.html"]);
  watcher.on("change", gulp.series("build"));
});

gulp.task("default", gulp.parallel("build", "watch"));
