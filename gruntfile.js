/**
 * Created by RoseTong on 15/10/10.
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less:task1'],
                options: {livereload: false}
            },
            autoprefixer: {
                files: ['css/*.css'],
                tasks: ['autoprefixer:task2'],
                options: {livereload: true}
            },
            manifest: {
                files: ['manifest.appcache'],
                tasks: ['manifest:generate'],
                options: {interrupt: false}
            },
            jshint: {
                files: ['js/*.js'],
                tasks: ['jshint:task3'],
                options: {interrupt: false}
            }
        },

        less: {
            task1:{
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },
        autoprefixer: {
            task2:{
               options: { browsers: ['last 2 versions', 'ie 8', 'ie 9'] },
                files : { 'css/style.css' : 'css/style.css' }
            }
        },
        manifest: {
            generate: {
                options: {
                    basePath: '',
                    cache: ['js/main.js', 'css/style.css'],
                    network: ['*'],
                    fallback: ['/../offline.html'],
                    exclude: ['js/jquery.min.js'],
                    preferOnline: true,
                    headcomment: " <%= pkg.name %> v<%= pkg.version %>",
                    verbose: true,
                    timestamp: true,
                    hash: true,
                    master: ['index.html']
                },
                src: [
                    '*.html',
                    'js/*.js',
                    'css/*.css'
                ],
                dest: 'manifest.appcache'
            }
        },
        jshint: {
            task3:{
                all: ['gruntfile.js', 'js/**/*.js'],
                options: { globals: { jQuery: true }}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-manifest');

    grunt.registerTask('default',['less', 'autoprefixer', 'manifest', 'jshint', 'watch']);


};