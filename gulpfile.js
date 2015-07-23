var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var reactify = require('reactify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('build', function() {
    browserify({
    entries: './src/app.js',
    debug: true
    })
    .transform(babelify)
	.transform(reactify)
    .bundle()
    .pipe(source('app.js'))    
    .pipe(gulp.dest('./build'));
});

gulp.task('compress', function() {
  return gulp.src('./build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task("compile", function () {
  return gulp.src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("build/"));
});

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('build/'));
});

gulp.task('minify-css', function() {
  return gulp.src('build/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('/build'));
});

gulp.task('dev', ['build', 'sass', 'minify-css'], function() {	
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/**/*.js', ['build']).on("change", browserSync.reload);	
    gulp.watch('style.scss', ['sass', 'minify-css']).on("change", browserSync.reload);  
});

gulp.task('production', ['build', 'compress', 'sass', 'minify-css']);