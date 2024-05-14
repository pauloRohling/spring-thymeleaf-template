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
import environments from "gulp-environments";

const sassCompiler = gulpSass(sass);

const ALL_ASSETS_FILES = "./assets/**/*";
const ALL_HTML_FILES = "./../resources/templates/**/*.html";
const ALL_JS_FILES = "./app/**/*.js";
const ALL_SCSS_FILES = "./scss/**/*.scss";
const DIST_PATH = "./../resources/static/dist";
const ASSETS_PATH = DIST_PATH + "/assets";
const ENV = environments.production() ? "production" : "development";

gulp.task("sass", () => {
  return gulp
    .src(ALL_SCSS_FILES)
    .pipe(sassCompiler({ outputStyle: "compressed" }).on("error", sassCompiler.logError))
    .pipe(postcss([tailwindcss, tailwindcssForms]))
    .pipe(uglifycss())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task("assets", () => {
  return gulp.src(ALL_ASSETS_FILES).pipe(gulp.dest(ASSETS_PATH));
});

gulp.task("webpack:build", () => {
  return gulp
    .src("./app/index.js")
    .pipe(webpack(webpackConfig(ENV), compiler))
    .pipe(gulp.dest(DIST_PATH));
});

gulp.task("format", () => {
  return gulp
    .src([ALL_HTML_FILES, ALL_JS_FILES, ALL_SCSS_FILES])
    .pipe(prettier(prettierConfig))
    .pipe(gulp.dest((file) => file.base));
});

gulp.task("build", gulp.parallel("sass", "assets", "webpack:build"));

gulp.task("watch", () => {
  const watcher = watch([ALL_JS_FILES, ALL_ASSETS_FILES, ALL_SCSS_FILES, ALL_HTML_FILES]);
  watcher.on("change", gulp.series("build"));
});

gulp.task("default", gulp.parallel("build", "watch"));
