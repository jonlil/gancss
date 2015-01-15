module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            files: {
                'build/gancss.css': 'src/gancss.sass'
            },

            prod: {
                options: {
                    style: 'compressed'
                },
                files: '<%= sass.files %>'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'src/**/*.sass',
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            },
            hologram: {
                files: ['doc_assets/**/*.html', 'src/**/*.sass'],
                tasks: 'hologram'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            single_file: {
                options: {
                    // Target-specific options go here.
                },
                src: 'build/gancss.css',
                dest: 'build/gancss.css'
            }
        },
        hologram: {
            generate: {
                options: {
                    config: 'hologram_config.yml'
                }
            }
        },
        cssmin: {
            prod: {
                files: {
                    'build/gancss.css': [
                        'build/gancss.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('copy_fonts', function() {
        grunt.file.mkdir('build/fonts');
        grunt.file.copy('src/fonts/icons.ttf', 'build/fonts/icons.ttf');
        grunt.file.copy('src/fonts/icons.woff', 'build/fonts/icons.woff');

    });

    grunt.registerTask('default', ['build', 'watch']);

    grunt.registerTask('build', ['sass:prod', 'autoprefixer:single_file', 'cssmin:prod', 'copy_fonts', 'hologram']);
};
