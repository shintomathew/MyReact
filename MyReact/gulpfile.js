var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var compiler = webpack(webpackConfig);

gulp.task('webpack:builder', function (done) {

    compiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError('webpack:build-dev', err);
        done();
    });
});

gulp.task('default', ['webpack:builder']);
