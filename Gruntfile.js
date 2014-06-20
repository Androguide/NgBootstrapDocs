module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['app/dist'],
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> by <%= pkg.author %> | <%= pkg.repository.url %>  */\n'
            },
            build: {
                src: 'app/dist/ng-bootstrap-docs.js',
                dest: 'app/dist/ng-bootstrap-docs.min.js'
            },
            ie: {
                src: 'app/dist/ie.js',
                dest: 'app/dist/ie.min.js'
            }
        },

        concat: {
            options: {
                separator: '\n\n'
            },
            dist: {
                src: ['app/dist/vendor.js', 'app/dist/app.combined.js'],
                dest: 'app/dist/ng-bootstrap-docs.js'
            },
            extras: {
                src: ['app/vendor/**/*.js'],
                dest: 'app/dist/vendor.js'
            },
            ie: {
                src: ['app/assets/js/ie10*.js', 'app/assets/js/ie-*.js'],
                dest: 'app/dist/ie.js'
            }
        },

        coffee: {
           compileWithMaps: {
                options: {
                  join: true
                },
                files: {
                  'app/dist/app.combined.js': ['app/scripts/**/*.coffee'] // 1:1 compile
                }
            }
        },

        watch: {
          scripts: {
            files: ['app/scripts/**/*.coffee'],
            tasks: ['coffee', 'concat:extras', 'concat:dist', 'concat:ie', 'uglify', 'uglify:ie']
          }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'coffee', 'concat:extras', 'concat:dist', 'concat:ie', 'uglify', 'uglify:ie']);
};