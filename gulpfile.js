var gulp = require('gulp'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    seq = require('run-sequence');

gulp.task('clean',function(callback){
    return gulp.src(['dist/jchart.all.js','dist/jchart.dist.js'])
               .pipe(clean());
});

gulp.task('build', function (callback) {
     return gulp.src(['src/JChart.js','src/JChart.*.js'])
                .pipe(concat('jchart.all.js'))
                .pipe(gulp.dest('dist/'));
});

gulp.task('pub', function (callback) {
     return gulp.src('templates/umd.js')
                .pipe(inject(gulp.src('dist/jchart.all.js'),{
                    starttag:'//inject:jchart',
                    endtag:'//endinject',
                    transform:function(filePath,file){
                        return file.contents.toString('utf8');
                    }
                }))
                .pipe(rename('jchart.dist.js'))
                .pipe(uglify())
                .pipe(gulp.dest('dist'));
});



gulp.task('default',function(){
     seq('clean','build','pub');
});

