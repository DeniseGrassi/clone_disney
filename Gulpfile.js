const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar estilos SCSS para CSS e salvar em "public/css"
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./public/css')); 
}

// Tarefa para otimizar imagens e salvar em "public/images"
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images')); 
}

// Tarefa para minificar scripts JavaScript e salvar em "public/js"
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js')); 
}

// Tarefa padrão para executar todas as tarefas em paralelo
exports.default = gulp.parallel(styles, images, scripts);

// Tarefa para assistir a mudanças em arquivos SCSS e JS
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};

