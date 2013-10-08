
# Base Template

##Currently Includes:

* Nunchucks SCSS framework
* Javascript Basics
* Jquery 1.9.1
* Modernizr 2.6.2
* RequireJS
* Underscore

---
##Grunt Goodness

[Grunt](http://gruntjs.com) lets us have common compilation and minification methods between our projects. To get up and running you're going to need to get Node and Grunt ( and a few other things maybe ) installed as well to get going.

**These instructions are for OSX only. Sorry Adam.**

**Step 1.** Install [Node](http://nodejs.org).

To install, just download the package and run the installer. This will install Node and the Node Package Manager ( NPM ).

**Step 2.** Install [Grunt](http://gruntjs.com/getting-started).

	npm install -g grunt-cli

**Step 3.**

For Compass you'll need to install the compass ruby gem. If you'd like to get notifications ( we'll cover this more later ) you can run the following commands in your terminal.

	$ sudo gem install compass terminal-notify compass-notify

**Step 4.**

Grunt uses a `package.json` file to keep some of its project configuration and a list of it's dependencies. Go in and add your projects name and repository!

To install these dependencies all you need to run in your terminal is `npm install`. This will install all the packages you'll initially need to get going.

Alright, now you're ready. You're willing. Let's Grunt.

---

##Grunt Tasks

=======
basetemplate
============

Base template for CodeIgniter Projects
>>>>>>> 5e7139cd605d5c88e7b530e9e9aea69126606dc1
