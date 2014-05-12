var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});
var less = require('gulp-less');
var path = require('path');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var image = require('gulp-image');

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
        './bower_components/angular/angular.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/vendor/*.js'])
        .pipe(plugins.concat('lib.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function(){
    gulp.src(['!./bower_components/**/*.min.css',
        './bower_components/**/*.css'])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('image', function () {
    gulp.src('./app/img/*')
        //.pipe(image())
        .pipe(gulp.dest('./build/img'));
});

gulp.task('copy', function() {
    gulp.src(['./app/index.html'])
        .pipe(gulp.dest('./build'));

    gulp.src(['./app/fonts/*'])
        .pipe(gulp.dest('./build/fonts'));

    gulp.src(['./app/svg/*'])
        .pipe(gulp.dest('./build/svg'));

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
    gulp.watch(['./app/**/*.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.less',['less']);
    gulp.watch('./app/index.html',['copy']);

});

gulp.task('connect', plugins.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
}));

gulp.task('default',['connect','scripts','templates','less','copy','vendorJS','vendorCSS','watch','image']);