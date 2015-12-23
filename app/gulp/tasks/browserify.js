// browserify bundler
var browserify = require('browserify')
var gulp = require('gulp')
var gutil = require("gulp-util");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var glob = require('glob');
var es = require('event-stream');
var path = require('path')

var stringify = require('stringify');
var watch_list = require('gulp/config').watch_list


var watchify = require('watchify');


gulp.task('browserify', function(done){

    gutil.log('Bundle Browserify')

    // NOTE: ONLY Bundle the first dir of file.
    glob('./src/js/*.js', function(err, files){

        if (err) done(err);

        var tasks = files.map(function(entry) {
            return browserify({paths:['./src/js',
                                    './bower_components'],
                               plugin:[watchify]
                               cache:{},
                               packageCache:{}})
                .transform(stringify(['.html', '.tpl', '.svg']))
                .transform("babelify", {presets: ["es2015", "react"]})
                .add(entry)
                .bundle()
                .on('error', function(err){
                    gutil.log(err.message);
                    // end this stream
                    this.emit('end');
                })
                .pipe(source(path.basename(entry)))
                .pipe(gulp.dest('./public/js'));
            });
        es.merge(tasks).on('end', done);

    })

})

watch_list.push([['src/js/**/*.js', 'src/js/**/*.tpl', 'src/js/**/*.svg'], ['browserify']])
