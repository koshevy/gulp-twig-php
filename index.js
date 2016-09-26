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

const fileExists = require('file-exists'),
      _ = require('lodash'),
      shellton = require('shellton'),
      through = require('through2');

const defaultOptions = {
    phpPath: "php",
    rootPath: __dirname+"/../../src",
    twigPhpPath: __dirname+"/php/Twig.php",
    cwd: __dirname+"/php",
    implicitInstall: true,
    logCallback: null
};

module.exports = (options) => {

    // Overwrites on default options
    _.merge(defaultOptions, options);
    options = defaultOptions;

    const log = (message) => {
        if(options.logCallback)
            options.logCallback(message);
    };

    return through.obj(function(file, enc, cb) {

        log('FOUND TEMPLATE: ' + file.path + ' DO PROCESSING');

        const doTemplateRender = () => {
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

                // todo debug-output and tests for render function

                thisThrough.push(file);
                cb();
            });
        };

        // check the Composer and Twig is installed
        if(options.implicitInstall){
            const isTwigInstalled = fileExists(
                '/../composer.lock', {
                    root: options.cwd
                });

            // It is a first enter to
            // the plugin ever! Probably,
            // it's a time to run installer.
            if(!isTwigInstalled){

                log('TWIG IS NOT INSTALLED. ATTEMPT TO INSTALL...');

                // installer execution
                shellton({
                    task: options.cwd + `/../install-twig.sh`,
                    cwd: __dirname
                }, function (err, stdout, stderr) {

                    log(stdout);
                    log(stderr);

                    // todo debug-output and tests for install function

                    // do actions after install complete
                    doTemplateRender();
                });

                return;
            }
        }

        // do actions immediately
        doTemplateRender();
    });
};
