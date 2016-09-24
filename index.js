/**
 * Plugin for gulp provides integration with Twig original
 * PHP implementation.
 *
 * Options:
 * ▪ phpPath            Path of PHP or alias (default: 'php')
 * ▪ rootPath           Root path of project
 * ▪ twigPhpPath        Path of PHP-script launches Twig
 * ▪ cwd                Working directory for PHP
 * ▪ logCallback        Callback for debug output (etc console.log)
 * ▪ implicitInstall    Do install the Twig and dependencies implicitly
 */

'use strict';

const gutil = require('gulp-util');
const _ = require('lodash');
const shellton = require('shellton');
const through = require('through2');

const defaultOptions = {
    phpPath: "php",
    rootPath: __dirname+"/../../src",
    twigPhpPath: __dirname+"/php/Twig.php",
    cwd: __dirname+"/php/",
    implicitInstall: true,
    logCallback: null
};

module.exports = (options) => {

    // Overwrites on default options
    _.merge(defaultOptions, options);
    options = defaultOptions;

    return through.obj(function(file, enc, cb) {

        if(options.logCallback)
            options.logCallback('FOUND TEMPLATE: ', file.path, ', DO PROCESSING');

        if(implicitInstall)
            // todo реализовать неявную установку
            ;

        // making command to execute
        const   thisThrough = this,
            command = (options.phpPath + ` -r '
					            require "` + options.twigPhpPath + `";
					            echo render("` + file.path + `", [
						        "root" => "` + options.rootPath + `"
					            ]);'`).replace(/\s+/g, ' ');

        // command execution
        shellton({
            task: command,
            cwd: options.cwd
        }, function (err, stdout, stderr) {
            file.contents = new Buffer(stdout);

            // todo debug-output and tests

            thisThrough.push(file);
            cb();
        });
    });
};
