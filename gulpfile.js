const {src, dest, series, watch,} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')

/*Минификация HTML*/
const htmlmin = require('gulp-htmlmin')

const del = require('del')
const concat = require('gulp-concat')

/*Автопрефиксер*/
const autoprefixer = require('gulp-autoprefixer')

const sync = require('browser-sync').create()

function html() {
    return src('source/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true

        }))
        .pipe(dest('dist'))
}

function scss() {
    return src('source/sass/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(concat('style.css'))
        .pipe(dest('dist'))
}

function clear() {
   return del('dist')
}

function copy() {
    return src('./source/img/**/*.*')
        .pipe(dest('dist/img'))

}

function serve() {
    sync.init({
        server: './dist'
    })

    watch('source/**.html', series(html)).on('change', sync.reload)
    watch('source/parts-html/**.html', series(html)).on('change', sync.reload)
    watch('source/sass/**.scss', series(scss)).on('change', sync.reload)
    watch('source/sass/blocks/**.scss', series(scss)).on('change', sync.reload)
    watch('source/sass/global/**.scss', series(scss)).on('change', sync.reload)
}

exports.build = series(clear, copy, scss, html)
exports.serve = series(clear, copy, scss, html, serve)
exports.clear = clear