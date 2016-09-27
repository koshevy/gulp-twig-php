[![Integrated with original Twig](https://img.shields.io/badge/twig-original-green.svg)](http://twig.sensiolabs.org/)
[![Automatized install](https://img.shields.io/badge/php%20libraries%20install-automatized-brightgreen.svg)](https://www.npmjs.com/package/gulp-twig-php#install-composer-and-php-based-dependencies)
[![Supports PHP 5.4+](https://img.shields.io/badge/php-5.4+-lightgrey.svg)](#)
[![Supports any NodeJS version](https://img.shields.io/badge/node-4.x/6.x-lightgrey.svg)](#)
[![Supports Gulp 3.9.1](https://img.shields.io/badge/gulp-3.9.1-cf4646.svg)](http://gulpjs.com/)
[![You can ask a question at public chat channel](https://img.shields.io/badge/chat-frontdoor-blue.svg)](https://koshevy.frontdoor.im)

[![Twig original](http://twig.sensiolabs.org/images/logo.png)](http://twig.sensiolabs.org/)

# Server-side template compiler based on original Twig (PHP) for Gulp

Provides integration with the [*Twig*](http://twig.sensiolabs.org/) original
PHP implementation. Makes easy working with true Twig
instead using of the ersatz (**twig.js**) that's has
no actual documentation and active community.

>> **It's a very simple**
>>
>> **Just install PHP and this plugin.** <br /> **All integrations are automatized.** 


### Table of contents:

1. What is the Twig?
2. Usage
3. Get Started
4. Readymade (Inspired by)

# What is the Twig?

The [*Twig*](http://twig.sensiolabs.org/) is a famous, sustainably growing template engine,
with powerful toolkit over the PHP. Originally, *Twig* intended to working with Symphony2
PHP framework, but more than 6 years history of product made *Twig* greater than just a template-engine
extension for framework. Today, *Twig* used by some other frameworks, CMS and etc.


### Reason to use

The *Twig* is a good challenger to be the mainstream of templating, that can
be common for *NodeJS* and *PHP-based* engines of HTML-based views development.


### Why not the Twig.js and the like?

Same projects are just imitators, that's try to copy established product,
but prospects of this copies are vague. All attempts to catch up original seems like
Sisyphean Stone lifting, ***and you can't rely on same tools in you projects***.

Particularly, *twig.js* refer us to original *Twig* documentation,
but we can't have explain information about tool we use. It s a trap.
In the past we tried to use the *twig-js*, but practice has revealed that
documentation was at odds to implementation. And I decide myself to create
this tool.

The prefer way for us is the integration bridge between the two systems.
I hope this way could be the simple. 

# Usage

It is simple as possible.
Just create gulp task and don't think about how it works:

```js

    const rename = require('gulp-rename'),
          twig = require('gulp-twig-php'),
          
          srcPath = 'some/path/to/src',
          srcDest = 'some/path/to/dest';
    

    // create new task: for example - 'views'
    gulp.task('views', () =>

        // set the pattern of source files 
        gulp.src(srcPath + 'views/*/*.twig')
        
            // and use this plugin
            .pipe(twig({
                logCallback: console.log    // some messages will be printed
            }))                             // through console.log(...)

            // next pipe must to change name
            // of destination file in order to
            // avoid source file rewriting
            .pipe(rename({
                extname: '.html'
            }))
            
            // and you can set destination
            .pipe(gulp.dest(srcDest))
    );

```


## API

Plugin can be called with arguments:

| Option                 | Purpose                                     |
|:-----------------------|:--------------------------------------------|
| ```phpPath```          | Path of PHP or alias (default: ```php```)   |
| ```rootPath```         | Root path of project                        |
| ```twigPhpPath```      | Path of PHP-script launches Twig            |
| ```cwd```              | Working directory for PHP                   |
| ```logCallback```      | Callback for debug output (etc console.log) |
| ```implicitInstall```  | Do install the Twig and dependencies implicitly |

# Get Started

## Install package

Install this package through NPM.

    npm install gulp-twig-php --save

## Install PHP

*Twig* working at PHP. You must install PHP at your computer
before. Prefered version is ***^5.6***.

The way you install PHP depends of you OS and version.

#### MacOS

Usually, PHP built at OS. Otherwise, you can install PHP via [*Homebrew*](http://brew.sh/):

    brew install php56

#### Windows

Try to download appropriate version here: http://php.net/downloads.php

## Set PHP default path

Plugin and theirs installer will call the PHP shortly, for instance: ```php installer.php```.
It a reason why you must set **EVN path for PHP** (if it not setted).


## OpenSSL

It supposed, you already have properly installed OpenSSL at your computer.
Otherwise you will get a error like this at first start:

![OpenSSL error at Composer start](https://raw.githubusercontent.com/koshevy/gulp-twig-php/master/demo/screenshots/composer-openssl-error.png)

You can find information about OpenSSL install at official site: https://www.openssl.org/


## Install Composer and PHP-based dependencies

>> **By default, you don't need to do anymore.**
>>
>> **Composer and Twig will be installed automatically at first plugin launch.**

Look at this screenshot. There is we have first time start of *Gulp* task
that uses *this plugin*. It can be seen that at first iteration plugin
checks is there composer or it's dependencies exist and then starts Composer. 

![OpenSSL error at Composer start](https://raw.githubusercontent.com/koshevy/gulp-twig-php/master/demo/screenshots/gulp-task-implicit-composer-install.png)

But if you want to turn off this feature in favor of manual installation,
set the ```implicitInstall``` option as ```false```.

It may be useful if you want to have more control when PHP-dependencies setup proceed.
In this case you can use script ```npm run install-twig```: 

    cd <your-project-path>/node_modules/gulp-twig-php
    npm run install-twig

This batch will install *Composer*, that's will help
to install twig and theirs plugins. 

# Readymade

Inspired by [**node-twig**](https://github.com/bitmade/node-twig)
that`s a good idea but was't well-working when it was needed (for me).
And still *node-twig* is not a Gulp-plugin as well as **gulp-twig-php** is not a pure Node.js
extension.

> Composer options in composer.json and middleware script Twig.php
> was taken from node-twig package created by Manuel Moritz-Schliesing.
>   
> Thank you, Manuel! Credentials info is untouched.