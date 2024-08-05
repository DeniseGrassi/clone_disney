const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/*.scss')   /* caminho p pegar tods os arquivos da pasta styles dentro de src com .scss*/
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css')); 
};


function images() {
    return gulp.src('./src/images/**/*') 			/*    ** p acessar as pags   */
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images')); 
}

function scripts() {
    return gulp.src('./src/scripts/*.js')   
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js')); 
};

exports.default = gulp.parallel(styles, images, scripts); 			/* executar o styles e o imagemin juntos */

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js',gulp.parallel(scripts))
};

