// Require Gulp Modules
var gulp = 			require('gulp');
var gulpUtil = 		require('gulp-util');

var clean = 		require('gulp-clean');
var concat = 		require('gulp-concat');
var copy = 			require('gulp-copy');
var minifyHtml = 	require('gulp-minify-html');
var notify = 		require('gulp-notify');
var sass = 			require('gulp-ruby-sass');
var uglify = 		require('gulp-uglify');
var watch = 		require('gulp-watch');

// Error Handler
function errorHandler(error) {
	console.log(error.toString());
	this.emit('end');
}

// Clean
gulp.task('clean', function() {
	gulp.src('./dev/*')
		.pipe(clean())
		.pipe(notify({
			message: "Wiped dev/ directory"
		}));
});
gulp.task('clean-dist', function() {
	gulp.src('./dist/*')
		.pipe(clean())
		.pipe(notify({
			message: "Wiped dist/ directory"
		}));
});

// CSS //TODO: maybe add an autoprefixer?
gulp.task('css', function() {
	//lib CSS
	gulp.src('./src/lib/css/**/*.css')
		.pipe(copy('./dev/assets/css', {
			prefix: 3
		}));
	//app styles
	sass('./src/scss/app.scss', {
			noCache: true,
			style: "expanded",
			lineNumbers: true,
			loadPath: './src/scss/*'
		})
		.pipe(gulp.dest('./dev/assets/css'))
		.pipe(notify({
			message: "Built CSS"
		}));
});
gulp.task('css-dist', function() {
	//lib CSS
	gulp.src('./src/lib/css/**/*.css')
		.pipe(copy('./dist/assets/css', {
			prefix: 3
		}));
	//app styles
	sass('./src/scss/app.scss', {
			noCache: true,
			style: "compressed",
			lineNumbers: false,
		 	loadPath: './src/scss/*'
		})
		.pipe(gulp.dest('./dev/assets/styles'))
		.pipe(notify({
			message: "Built CSS (for dist)"
		}));
});

// JavaScript
gulp.task('js', function() {
	//lib JS
	gulp.src('./src/lib/js/**/*.*')
		.pipe(copy('./dev/assets/js', {
			prefix: 3
		}));
	//app JS
	gulp.src('./src/js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dev/assets/js'))
		.pipe(notify({
			message: "Built JS"
		}))
});
gulp.task('js-dist', function() {
	//lib JS
	gulp.src('./src/lib/js/**/*.*')
		.pipe(copy('./dist/assets/js', {
			prefix: 3
		}));
	//app JS
	gulp.src('./src/js/**/*.js')
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dev/assets/js'))
		.pipe(notify({
			message: "Built JS (for dist)"
		}))
});

// HTML
gulp.task('html', function() {
	//app HTML
	gulp.src('./src/index.html')
		.pipe(copy('./dev', {
			prefix: 1
		}));
	gulp.src('./src/partials/*.html')
		.pipe(copy('./dev/assets/partials', {
			prefix: 2
		}));
	gulp.src('./src/index.html')
		.pipe(notify({
			message: "Built HTML"
		}));
});
gulp.task('html-dist', function() {
	var minifyOpts = {
		cdata: true,
		empty: true,
		quotes: true
	};
	//app HTML
	gulp.src('./src/index.html')
		.pipe(copy('./dist', {
			prefix: 1
		}))
		.pipe(minifyHtml(minifyOpts));
	gulp.src('./src/partials/**/*.html')
		.pipe(copy('./dist/assets/partials', {
			prefix: 2
		}))
		.pipe(minifyHtml(minifyOpts));
	gulp.src('./src/index.html')
		.pipe(notify({
			message: "Built HTML (for dist)"
		}));
});

// Images
gulp.task('images', function() {
	gulp.src('./src/images/**/*.*')
		.pipe(copy('./dev/assets/images', {
			prefix: 2
		}));
	gulp.src('./src/index.html')
		.pipe(notify({
			message: "Built images"
		}));
});
gulp.task('images-dist', function() {
	gulp.src('./src/images/**/*.*')
		.pipe(copy('./dist/assets/images', {
			prefix: 2
		}));
	gulp.src('./src/index.html')
		.pipe(notify({
			message: "Built images (for dist)"
		}));
});


// Fonts
gulp.task('fonts', function() {
	//lib fonts
	gulp.src('./src/lib/fonts/**/*.*')
		.pipe(copy('./dev/assets/fonts', {
			prefix: 3
		}));
	gulp.src('./src/index.html')
		.pipe(notify({
			message: "Built Fonts"
		}));
});
gulp.task('fonts-dist', function() {
	//lib fonts
	gulp.src('./src/lib/fonts/**/*.*')
		.pipe(copy('./dist/assets/fonts', {
			prefix: 3
		}));
	gulp.src('./src/index.html')
		.pipe(notify({
			message: "Built Fonts (for dist)"
		}));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('./src/scss/**/*.scss', ['css']);
	gulp.watch('./src/js/**/*.js', ['js'])
	gulp.watch('./src/index.html', ['html']);
	gulp.watch('./src/partials/**/*.html', ['html']);
});

gulp.task('default', ['css', 'js', 'html', 'images', 'fonts']);
gulp.task('dist', ['css-dist', 'js-dist', 'html-dist', 'images-dist', 'fonts-dist']);
//use "gulp watch" while developing
//use "gulp clean" or "gulp clean-dist" to wipe a directory
