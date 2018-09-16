module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: 'src/',
                        src: 'js/views/*.html',
                        dest: 'dist/js/views/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'src/',
                        src: 'api/*.json',
                        dest: 'dist/api/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            }
        },
        concat: {
            development: {
                files: {
                    'dist/js/bundle.js': 'src/js/**/*.js'
                }
            },
            production: {
                files: {
                    'dist/js/bundle.js': [
                        'src/js/**/*.js',
                        '!src/js/**/*.tests.js'
                    ]
                }
            }
        },
        sass: {
            development: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/css/app.css': 'src/sass/app.scss'
                }
            },
            production: {
                files: {
                    'dist/css/app.css': 'src/sass/app.scss'
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jquery: true
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: {
                    'dist/js/bundle.js': 'src/**/*.js'
                }
            }
        },
        uglify: { // Begin JS Uglify Plugin
            build: {
                src: ['src/js/**/*.js'],
                dest: 'dist/js/bundle.js'
            }
        },
        watch: {
            styles: {
                files: ['src/sass/**/*.scss'], // which files to watch
                tasks: ['sass:development'],
                options: {
                    nospawn: true,
                    livereload: true

                }
            }
        },
        connect: {
          server: {
            options: {
              port: 9000,
              base: '.',
              hostname: '0.0.0.0',
              protocol: 'http',
              livereload: true,
              open: true,
              keepalive: true
            }
          }
        },
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    singleRun: true,
                    browsers: ['PhantomJS'],
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-aria/angular-aria.js',
                        'node_modules/angular-animate/angular-animate.js',
                        'node_modules/angular-route/angular-route.js',
                        'node_modules/angular-sanitize/angular-sanitize.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'karma']);
    grunt.registerTask('default', ['copy:main', 'concat:development', 'sass:development', 'jshint', 'connect', 'watch']);
    grunt.registerTask('build', ['copy:main', 'sass:production', 'ngAnnotate', 'connect']);
};