const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('default', (cb) => {
    gulp.watch('./src/css/**/*.scss', gulp.task('styles'))
    nodemon({
        script:'server.js',
        env: { NODE_ENV: 'development' }
    })
    cb();
})


gulp.task('styles', (cb) => {
    gulp.src('./src/css/**/*.scss')
        .pipe(
            sass({})
            .on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                browsers: ['last 2 browsers']
            })
        )
        .pipe(
            gulp.dest('./public/css')
        )
    cb();
})