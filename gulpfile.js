let gulp = require('gulp'),
	babel = require('gulp-babel'),
	prefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	browserSync = require("browser-sync").create();

const path = {
	build: {
		html: 'build',
		js: 'build/js/',

		css: 'build/css/',
		img: 'build/img/',
		fonts: 'build/fonts/'
	},
	src: {
		html: 'src/index.html',
		js: 'src/js/script.js',
		style: 'src/scss/**/*.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	watch: {
		html: 'src/index.html',
		js: 'src/js/script.js',
		style: 'src/scss/**/*.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './build/'
};


const htmlBuild = () => (
	gulp.src(path.src.html)
		.pipe(gulp.dest(path.build.html))
		.pipe(browserSync.stream())
);

const scssBuild = () => (
	gulp.src(path.src.style)
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(clean())
		.pipe(prefixer({
			browsers: ['> 0.2%','last 100 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(browserSync.stream())

);

const jsBuild = () => (
	gulp.src(path.src.js)
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest(path.build.js))
		.pipe(browserSync.stream())
);

const imgBuild = () => (
	gulp.src(path.src.img)
		// .pipe(imagemin({
		// 	progressive: true,
		// 	svgoPlugins: [{
		// 		removeViewBox: false
		// 	}],
		// 	// use: [pngquant()],
		// 	interlaced: true
		// }))
		.pipe(gulp.dest(path.build.img))
		.pipe(browserSync.stream())
);

const fontsBuild = () => (
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
		.pipe(browserSync.stream())
);

const phpBuild = () => (
	gulp.src("./src/js/email.php")
		.pipe(gulp.dest(path.build.js))
		.pipe(browserSync.stream())
);

const watcher = () => {
	browserSync.init({
		server: {
			baseDir: "./build"
		}
	});
	gulp.watch(path.src.html, htmlBuild).on('change', browserSync.reload);
	gulp.watch(path.watch.style, scssBuild).on('change', browserSync.reload);
	gulp.watch(path.watch.js, jsBuild).on('change', browserSync.reload);
	gulp.watch(path.watch.img, imgBuild).on('change', browserSync.reload);
	gulp.watch(path.watch.fonts, fontsBuild).on('change', browserSync.reload);
};

const cleanBuild = () => (
	gulp.src(path.clean, {allowEmpty: true})
		.pipe(clean())
);


/************ T A S K S ************/

gulp.task('htmlBuild', htmlBuild);
gulp.task('scssBuild', scssBuild);
gulp.task('jsBuild', jsBuild);
gulp.task('imgBuild', imgBuild);
gulp.task('fontsBuild', fontsBuild);
gulp.task('watcher', watcher);
gulp.task('clean', cleanBuild);

gulp.task('default', gulp.series(
	cleanBuild,
	htmlBuild,
	scssBuild,
	jsBuild,
	phpBuild,
	gulp.parallel(fontsBuild,imgBuild),
	watcher
));