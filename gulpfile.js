const  gulp = require ('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp. task ('test', function (){
    console. log("Hello World")
})

gulp.task('autoprefixer', function () {
    gulp.src('sourse/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
})