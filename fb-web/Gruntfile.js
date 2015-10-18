'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // include browserify alias to config file
    var browserifyAliasConfig = require('./browserify.config.js');

    // Define the configuration for all the tasks
    grunt.initConfig({

        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'build/resources/main/static'
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                app: 'chrome'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>/src',
                        '<%= yeoman.app %>',
                    ]
                }
            },
            test: {
                options: {
                    hostname: 'localhost',
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>/src',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            //js: {
            //files: ['<%= yeoman.app %>/src/{,*/}*.js'],
            //tasks: ['jshint'],
            //options: { livereload: true }
            //},
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            //uncomment this if you want to run testing everytime your scripts changing
            //karma: {
            //files: ['app/src/**/*.js', 'test/**/*.js'],
            //tasks: ['karma:unit'] //NOTE the :run flag
            //},
            gruntfile: {
                files: ['Gruntfile.js']
            },
            //compass: {
            //    files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
            //    tasks: ['compass:server', 'autoprefixer', 'concat']
            //},
            browserify: {
                files: [
                    '<%= yeoman.app %>/src/**/*.js',
                    '!<%= yeoman.app %>/src/**/*.spec.js',
                    '!<%= yeoman.app %>/src/main.js',
                    '!<%= yeoman.app %>/src/spec.js'
                ],
                tasks: ['browserify:app'],
                options: {livereload: true}
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '<%= yeoman.app %>/src/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },
        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            afterBuild: {
                files: [{
                    dot: true,
                    src: ['<%= yeoman.dist %>/src/app.js']
                }]
            },
            server: '.tmp'
        },

        // karma testing
        //karma: {
        //    unit: {
        //        configFile: 'config/karma.conf.js'
        //    }
        //},

        // Jasmine testing framework configuration options
        //jasmine: {
        //    pivotal: {
        //        src: '<%= yeoman.app %>/src/**/*.js',
        //        options: {
        //            specs: 'test/spec/*.spec.js',
        //        }
        //    }
        //},

        // Compiles Sass to CSS and generates necessary files if requested
        //    // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.',
                    app: {
                        html: '<%= yeoman.app %>/index.html',
                        ignorePath: '/'
                    },
                    dest: '.tmp/styles/'
                }]
            }
        },

        //browserify task
        browserify: {
            app: {
                files: {'<%= yeoman.app %>/src/main.js': ['<%= yeoman.app %>/src/app.js']},
                options: {alias: browserifyAliasConfig, debug: true}
            },
            dist: {
                files: {'<%= yeoman.dist %>/src/main.js': ['<%= yeoman.app %>/src/app.js']},
                options: {alias: browserifyAliasConfig}
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {dest: '<%= yeoman.dist %>'},
            html: '<%= yeoman.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {assetsDirs: ['<%= yeoman.dist %>']},
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        uglify: {
            dist: {
                files: [{
                    src: '<%= yeoman.dist %>/src/{,*/}*.js', // source files mask
                    expand: true // allow dynamic building
                }]
            }
        },
        concat: {
            dist: {
                src: ['.tmp/styles/{,*/}*.css'],
                dest: '.tmp/styles/style.css'
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/sass-bootstrap/fonts/*.*',
                        'bower_components/font-awesome/fonts/*.*'
                    ]
                }]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['src/**/*.html']
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            //server: [
            //    'compass:server',
            //    'copy:styles'
            //],
            test: [
                'copy:styles'
            ],
            dist: [
                //'compass',
                'copy:styles',
            ]
        },

        ngtemplates: {
            templateCache: {
                src: '<%= yeoman.app %>/src/**/**.html',
                dest: '<%= yeoman.app %>/src/angular-template-cache.js',
                options: {
                    //strip prefix
                    url: function (url) {
                        return url.replace('app/src', '');
                    },
                    standalone: true,
                    module: 'genTemplateCache'
                }

            }
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'useminPrepare',
            'ngtemplates',
            'browserify:app',
            'copy:dist',
            'copy:html',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',
            'jasmine'
        ]);
    });

    grunt.registerTask('build', [
        'useminPrepare',
        'concurrent:dist',
        //'autoprefixer',
        'ngtemplates',
        'browserify:dist',
        'clean:afterBuild',
        'copy:dist',
        'copy:html',
        //'uglify',
        'usemin'
    ]);

    grunt.registerTask('default', [
        //'test',
        'build'
    ]);


};
