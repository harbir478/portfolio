
AOS.init();

$(".btn--btnDiv").click(function() {
    $('html,body').animate({
        scrollTop: $(".heading-tertiary").offset().top},
        'slow');
});


$(".projectBtn").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        'slow');
});

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

