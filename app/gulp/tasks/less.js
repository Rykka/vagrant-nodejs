var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var gutil = require("gulp-util");
var watch_list = require('gulp/config').watch_list

gulp.task('less', function () {

    gutil.log('Compile less');

    // Specific less dir to avoid the 'less' dir in dest.
    return gulp.src('./src/css/**/*.less')
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, '..', '..', 'src', 'css', 'includes') ]
        }))
        .on('error', function(err){
            gutil.log(err)
            this.emit('end')
        })
        .pipe(gulp.dest('./public/css'));

});

watch_list.push(['src/css/**/*.less', ['less']])
