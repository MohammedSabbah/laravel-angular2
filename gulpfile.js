var elixir = require('laravel-elixir');
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var pump   = require('pump');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 gulp.task('compress', function() {
    gulp.src('public/dist/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
 });

 gulp.task('default', ['compress']);

/*
 gulp.task('compress', function(cb){
    pump([
            gulp.src('/public/dist/bundle.js'),
            uglify(),
            gulp.dest('/public/dist/bundle.min.js')
        ], cb);
 });*/

/*
elixir(function(mix) {
    mix.sass('app.scss');
});
*/
