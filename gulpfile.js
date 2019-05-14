var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCSS = require('gulp-concat-css');
var ftp = require('gulp-ftp');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCSS("style.css"))        
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
gulp.task('ftp', function(){
	return gulp.src('src/**')
	.pipe(ftp({
            host: '88.99.94.73',
            user: 'darka177',
            pass: 'qUxH17rdET',
            remotePath: 'www/axterial.net/stream'
    }))
    // you need to have some kind of stream after gulp-ftp to make sure it's flushed
    // this can be a gulp plugin, gulp.dest, or any kind of stream
    // here we use a passthrough stream
    .pipe(gutil.noop());
});

gulp.task('default', ['serve']);
