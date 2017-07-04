

//gulp对象
//var gulp = require("gulp");
//gulp.src("src/html/*.html");
//.pipe(gulp.dest("dest/html"));

//task():定义任务
//var gulp = require("gulp");
//gulp.task("default",function(){
//	console.log("default task!");
//})

//gulp.task("one",function(){
//	console.log("one-task");
//})
//
//gulp.task("default",["one"],function(){
//	console.log("one-default");
//})

//gulp-htmlmin插件的参数对象
var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}


var gulp = require("gulp");
//var htmlmin = require("gulp-htmlmin");
//gulp.task("htmlTask",function(){
//	gulp.src("src/html/*")
//	.pipe(htmlmin(obj))//使用插件
//	.pipe(gulp.dest("dest/html"));
//});

var minifyCss = require("gulp-minify-css");
gulp.task("cssTask",function(){
	gulp.src("css_src/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("css"));
});

var uglify = require("gulp-uglify");
gulp.task("uglifyTask",function(){
	gulp.src("js_src/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});

gulp.task("default",["cssTask","uglifyTask"]);