/*global module:false*/

module.exports = function(grunt)
{
    // Project configuration.
    grunt.initConfig(
    {
        // Task configuration.
        pkg: grunt.file.readJSON('package.json'),

        base_src_path       : 'src',            // source directory for files.
        base_dist_path      : 'dist',           // distribution directory.
        sass_src_path       : 'scss',           // SCSS source directory

        js_src_path         : 'src/assets/js',      // JS directory
        css_src_path        : 'src/assets/css',     // CSS directory
        images_src_path     : 'src/assets/images',  // Images directory

        block_file          : 'src/index.php',     // This is the path ( relative to src ) to where your javscript block is.

        /**********************************
        Grunt Watch Task
        **********************************/

        watch: {
            compass: {
                files: ["<%= sass_src_path %>/**/*.scss"],
                tasks: ["compass:development"],
                options: {
                    nospawn: true,
                    livereload:true
                }
            },
            js: {
                files: ["<%= js_src_path %>/**/*.js"],
                tasks: ["jshint"],
                options: {
                    nospawn: true
                }
            },
        },

        /**********************************
        Compass Compiling
        **********************************/

        compass: {
            development: {
                options: {
                    httpPath        : "/<%= base_src_path %>",
                    sassDir         : "<%= sass_src_path %>/project",
                    cssDir          : "<%= base_src_path %>/<%= css_src_path %>",
                    imagesDir       : "<%= base_src_path %>/<%= images_src_path %>",
                    javascriptsDir  : "<%= base_src_path %>/<%= js_src_path %>",
                    require         :  [ 'compass-notify' ],

                    importPath      : "<%= sass_src_path %>/nunchucks",
                    environment     : "development",
                    outputStyle     : "expanded"
                }
            }
        },

        /**********************************
        CSS Minification
        **********************************/

        cssmin: {

            compress :
            {
                expand: true,
                cwd: '<%= base_src_path %>/',
                src: [ '<%= css_src_path %>/*.css' ],
                dest: '<%= base_dist_path %>/',
                ext: '.min.css',
                options:
                {
                    report: 'gzip',
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */'
                }
            }
        },

        /**********************************
        JS Uglify
        **********************************/

        uglify: {
            compress :
            {
                // expand: true,
                // cwd: '<%= base_src_path %>/',
                // src: [ '<%= js_src_path %>/*.js' ],
                // dest: '<%= base_dist_path %>/',
                // ext: '.min.js',
                // files:{
                //     '<%= base_dist_path %>/<%= js_src_path %>/site.min.js',
                // }
                files: {
                    '<%= base_dist_path %>/<%= js_src_path %>/site.min.js' : [ '<%= base_src_path %>/<%= js_src_path %>/site.min.js' ]
                },
                options:
                {
                    report: 'gzip',
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */'
                }
            }
        },

        /**********************************
        Use Min
        Concat JS files.
        **********************************/

        useminPrepare: {
            html: ['<%= base_dist_path %>/<%= block_file %>']
        },
        usemin: {
            html: ['<%= base_dist_path %>/<%= block_file %>']
        },

        /**********************************
        JS Hint
        Linting of Javascript Files
        Don't try and lint minified scripts please. You're gonna have a bad time.
        **********************************/

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                force: true,
                ignores : [ '<%= base_src_path %>/<%= js_src_path %>/vendor/**/*.js' ],
                globals: {
                    jQuery: true
                }
            },
            files: {
                src: ['<%= base_src_path %>/<%= js_src_path %>/**/*.js']
            },

        },

        /**********************************
        Image Minification
        For JPEGs and PNGs
        **********************************/

        imagemin : {
            production :
            {
                options : {
                    optimizationLevel: 3
                },

                files :[
                {
                  expand: true,
                  cwd: '<%= base_src_path %>/<%= images_src_path %>',
                  src: ['**/*.*'],
                  dest: '<%= base_dist_path %>/<%= images_src_path %>'
                }]
            }
        },

        /**********************************
        Copying Project Files
        Copies project files to your distribution directory
        **********************************/
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= base_src_path %>/',
                        src: ["**", "!<%= js_src_path %>/**/**.js", "!<%= js_src_path %>/**/**.css", "!<%= js_src_path %>/*/**.*"],
                        dest: '<%= base_dist_path %>/'
                    }
                ]
            }
        },

        clean : {
            dist : ['<%= base_dist_path %>/']
        },

        bump :
        {
            options :
            {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: false,
                commitMessage: 'Release v${version}',
                commitFiles: ['package.json'], // '-a' for all files
                createTag: false,
                tagName: 'v${version}',
                tagMessage: 'Version ${version}',
                push: false,
                pushTo: 'origin'
            }
        },

        /**********************************
        Custom Notifications if you need them.
        https://github.com/dylang/grunt-notify
        **********************************/

        notify: {
            task_name: {
                options: {
                    title: 'Distro Task Complete',          // optional
                    message: 'Distrubtion v<%= pkg.version <%></%> created!',   //required
                }
            },

            distro : {
                options: {
                    title: 'Distro Task Complete',          // optional
                    message: 'Distrubtion v<%= pkg.version <%></%> created!',   //required
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('distro', ['clean', 'bump', 'copy', 'imagemin:production', 'useminPrepare', 'cssmin', 'concat', 'usemin', 'uglify']);
    grunt.registerTask('compile-css', ['compass']);
};