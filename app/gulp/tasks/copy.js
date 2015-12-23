var gulp = require('gulp');
var plumber = require('gulp-plumber');
var watch_list = require('gulp/config').watch_list
var gutil = require("gulp-util");

gulp.task('vanilla-js', function() {
    gutil.log('Copy vanilla-js');
    gulp.src('./src/js/vanilla/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('./public/js'))
});

// gulp.task('vanilla-css', function() {
//     gutil.log('Copy vanilla-css');
//     gulp.src('./src/css/vanilla#<{(||)}>#*.css')
//         .pipe(plumber())
//         .pipe(gulp.dest('./public/css'))
// });

// gulp.task('vanilla-html', function() {
//     gutil.log('Copy vanilla-html');
//     gulp.src('./src/html/vanilla#<{(||)}>#*.html')
//         .pipe(plumber())
//         .pipe(gulp.dest('./server/views'))
// });

gulp.task('img', function() {
    gutil.log('Copy img');
    gulp.src('./src/img/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('./public/img'))
});

gulp.task('ico', function() {
    gutil.log('Copy favicon');
    gulp.src('./src/favicon.ico')
        .pipe(plumber())
        .pipe(gulp.dest('./public'))
});


// gulp.task('copy', ['vanilla-js', 'vanilla-css','vanilla-html', 'img', 'ico'])
gulp.task('copy', ['img', 'ico'])

// watch_list.push(['src/js/vanilla#<{(||)}>#*.js', ['vanilla-js']])
// watch_list.push(['src/css/vanilla#<{(||)}>#*.css', ['vanilla-css']])
// watch_list.push(['src/html#<{(||)}>#*.html', ['vanilla-html']])
watch_list.push(['src/img/**.*', ['img']])
watch_list.push(['src/favicon.ico', ['ico']])
