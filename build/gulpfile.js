const gulp = require('gulp');
const prefix = require('gulp-prefix');
const option = {
  src: 'public/h5-src',
  cdn: 'http://gad.qpic.cn',
  dist: 'public/h5'
}

// 为静态模板加CDN
gulp.task('prefix', function() {
  console.log('加CDN前缀...');
  return gulp.src(option.src + '/**/*.html', { base: option.src })
    .pipe(prefix(option.cdn, null))
    .pipe(gulp.dest(option.dist));
});