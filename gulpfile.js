var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});
var less = require('gulp-less');
var path = require('path');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');

gulp.task('scripts', function(){
    //combine all js files of the app
    gulp.src(['./app/**/*.js'])
        .pipe(plugins.concat('app.js'))
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
        './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('less', function () {
    gulp.src('./app/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    gulp.src([
        './bower_components/**/*.js'])
        .pipe(plugins.concat('lib.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src(['!./bower_components/**/*.min.css',
        './bower_components/**/*.css'])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-index', function() {
    gulp.src('./app/index.html')    
        .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',        
        'build/**/*.js',
        'build/**/*.less'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.less',['less']);
    gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('connect', plugins.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
}));

gulp.task('default',['connect','scripts','templates','less','copy-index','vendorJS','vendorCSS','watch']);