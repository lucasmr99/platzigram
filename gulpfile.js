const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('babelify');
const brawserify = require('browserify')
const source = require('vinyl-source-stream');
const watchify = require('watchify')

function sassBuild(){
    return gulp.src('./dev/style.scss')
    .pipe(sass({
        outputStyle: 'compact'
    }))
    .pipe(gulp.dest('./public')); 
}

function assets(){
    return gulp.src('assets/*')
    .pipe(gulp.dest('./public'))
}

function compile(wath){
    const bundle = watchify(brawserify({
            entries: "./src/app.js",
            transform: [babel.configure({ presets: ["@babel/preset-env"] } )]
        }));

    function rebundle(){
        return bundle
            .bundle()
            .on('error', function(err){ console.log(err); this.emit('end') })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./public'))
    } 

    if(wath){
        bundle.on('update', ()=>{
            console.log('-->Bundling...');
            rebundle();
        })
    }

    rebundle();
}

function bundle(){
    return compile(false);
}

gulp.task('watch', ()=>{
    return compile(true);
})

exports.default = gulp.parallel(sassBuild, assets, bundle )