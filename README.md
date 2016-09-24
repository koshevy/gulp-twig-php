# Gulp plugin for Twig (PHP)
 
Provides integration with The [*Twig*](http://twig.sensiolabs.org/) original
PHP implementation. Makes easy working with true Twig
instead using of the ersatz (**twig-js**) that's has
no actual documentation and active community.

Inspired by [**node-twig**](https://github.com/bitmade/node-twig)
that`s a good idea but was't well-working when it was needed (for me).
And still *node-twig* is not a Gulp-plugin as wel as **gulp-twig-php** is not a pure Node.js
extension.

    Composer options in composer.json and middleware script Twig.php
    was taken from node-twig package created by Manuel Moritz-Schliesing.
    
    Thank you, Manuel! Credentials is untouched.

### What is the Twig?

The [*Twig*](http://twig.sensiolabs.org/) is a famous, sustainably growing template engine,
with powerful toolkit over the PHP. Originally, *Twig* intended to working with Symphony2
PHP framework, but more than 6 years history of product made *Twig* greater than just a template-engine
extension for framework. Today, *Twig* used by some other frameworks, CMS and etc.


### Purpose to use

The *Twig* is a good challenger to be the mainstream of templating, that can
be common for *NodeJS* and *PHP-based* engines of HTML-based views development.


### Why not the Twig-JS and the like?

Same projects are just imitators, that's try to copy established product,
but prospects of this copies are vague. All attempts to catch up original seems like
Sisyphean Stone lifting, ***and you can't rely on same tools in you projects***.

Particularly, *node-js* refer us to original *Twig* documentation,
but we can't have explain information about tool we use. It s a trap.
In the past we tried to use the *node-js*, but practice has revealed that
documentation was at odds to implementation. And I decide myself to create
this tool.

The prefer way for us is the integration bridge between the two systems.
I hope this way could be the simple. 

## Get Started

### Install package

Install this package through NPM.

    npm install gulp-twig-php --save 

### Install PHP

*Twig* working at PHP. You must install PHP at your computer
before. Prefered version is ***^5.6***.

The way you install PHP depends of you OS and version.

#### MacOS

Usually, PHP built in installed on system. Otherwise, you can install PHP via [*Homebrew*](http://brew.sh/):

    brew install php56

#### Windows

Try to download appropriate version here: http://php.net/downloads.php

### Set PHP default path

Plugin and theirs installer will call the PHP shortly: ```php installer.php``` and etc.
You must set EVN path for PHP (if it not setted).

### Install Composer and PHP-based dependencies

You need just execute installer in your plugin directory:

    cd PATH-TO/node-modules/gulp-twig-php
    PATH-TO/node-modules/gulp-twig-php/install-twig.sh

This batch will install *Composer*, that's will help
to install twig and theirs plugins. 

## Usage



## API

Plugin can be called with arguments:

- **phpPath**        Path of PHP or alias (default: ```php```)
- **rootPath**       Root path of project
- **twigPhpPath**    Path of PHP-script launches Twig
- **cwd**            Working directory for PHP
- **logCallback**    Callback for debug output (etc console.log)