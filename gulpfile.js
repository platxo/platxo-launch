var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass');

// Server dev
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './' //sirviendo ficheros
    }
  })
})

// Process css
gulp.task('css', function () {

  return gulp
    .src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./static/css'))
    .pipe(browserSync.stream()) // refrescar navegador
})


// Watch changes
gulp.task('watch', function() {
  gulp.watch('./src/*.scss', ['css'])
  gulp.watch('./*.html').on('change', browserSync.reload)  // ejecuta function cada vez que escuche cambios
})

gulp.task('default', ['watch', 'serve'])