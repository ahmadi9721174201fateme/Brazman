
const { assert } = require('console');
const gulp  = require('gulp');
const concat     = require('gulp-concat');
const livereload = require('gulp-livereload');
const terser     = require('gulp-terser');
gulp.task('concat-css', () => {
    return gulp.src([
        './assets/css/all.css',
        './assets/css/bootstrap.rtl.min.css',
        'assets/css/slick-theme.css',
        'assets/css/slick.css',
        'assets/css/main.css',
    ]).pipe(concat('main.rtl.css')).pipe(gulp.dest('./dis/assets/css')).pipe(livereload());
});

gulp.task('concat-js', () => {
    return gulp.src([
        './assets/js/jquery.min.js',
        './assets/js/bootstrap.min.js',
        './assets/js/bootstrap.bundle.min.js',
        './assets/js/slick.min.js',
      'assets/js/script.js',
    ]).pipe(concat('main.js')).pipe(gulp.dest('./dis/assets/js'));
});




gulp.task('watch', function () {
  
    gulp.watch(['./assets/css/main.css', './assets/js/*.js'], gulp.series('concat-css', 'concat-js'));

});
//
// gulp.task('default',['watch']);