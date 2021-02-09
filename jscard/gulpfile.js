const gulp = require('gulp');
const rename = require("gulp-rename")
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
let uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');
const path = {
    src: {
        img: './src/img/**/*',
        scss: './src/scss/**/*.scss',
        html: 'index.html',
        js: './src/js/**/**/*.js',
        module: './src/module/*.js',
        htmlSection:'./src/html/**/*.html'
    },
    dist: {
        css: './dist/css',
        img: './dist/img',
        js: './dist/js',
        module: './dist/module',
        root: 'dist',
    }
}
//function
const createStyle = () => {
    return gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(cleanCSS({compatibility: 'ie7'}))
        .pipe(autoprefixer())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
}
// const createImg = () => {
//     return gulp.src(path.src.img)
//         .pipe(imagemin())
//         .pipe(gulp.dest(path.dist.img))
//         .pipe(browserSync.stream())
// }
const createModule = () =>{
    return gulp.src(path.src.module)
        .pipe(gulp.dest(path.dist.module))
        .pipe(browserSync.stream())
}
const createJs = () => {
    return gulp.src(path.src.js)
        .pipe(rename("script.js"))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream())
}
const cleanDist = () => {
    return gulp.src(path.dist.root, {allowEmpty: true})
        .pipe(clean())
        .pipe(browserSync.stream())
}
const include = () => {
    return gulp.src(path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.dist.root));
}
const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "dist/."
        }
    });
    gulp.watch(path.src.scss, createStyle).on('change', browserSync.reload);
    // gulp.watch(path.src.img, createImg).on('change', browserSync.reload);
    gulp.watch(path.src.js, createJs).on('change', browserSync.reload);
    gulp.watch(path.src.module, createModule).on('change', browserSync.reload)
    gulp.watch(path.src.htmlSection, include).on('change', browserSync.reload);
    gulp.watch(path.src.html, include).on('change', browserSync.reload);
}
//task
gulp.task('build', gulp.series( cleanDist, include, createJs, createModule, createStyle))
gulp.task('dev', watcher)