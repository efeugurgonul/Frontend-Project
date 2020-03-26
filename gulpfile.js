const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./sass/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function js() {
    return gulp.src('./js/app.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./js_ugly'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.sass', style);
    gulp.watch('./js/**/*.js', js);
    gulp.watch('./*html').on('change', browserSync.reload);
}

exports.style = style;
exports.js = js;
exports.watch = watch;