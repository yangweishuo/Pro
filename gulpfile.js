var gulp=require('gulp');
var myutil = require('gulp-util');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-clean-css');
var minifyHtml = require('gulp-minify-html');


gulp.task('hello', function () {
console.log('hello');
});
gulp.task('uglifyjs', function(){
gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('xiangmu/js'))
});
gulp.task('myminifycss', function () {
gulp.src('css/*.css')
.pipe(cssmin())
.pipe(gulp.dest('xiangmu/css'));
});
gulp.task('myminifyhtml', function () {
gulp.src('*.html') // 要压缩的html文件
.pipe(minifyHtml()) //压缩
.pipe(gulp.dest('xiangmu/html'));
});


gulp.task('default',['hello','uglifyjs','myminifycss','myminifyhtml']);
