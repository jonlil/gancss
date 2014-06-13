module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            files: {
                'build/gancss.css': 'src/gancss.sass',
            },
  
            prod: {
                options: {
                    style: 'compressed'
                },
                files: '<%= sass.files %>'
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

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['build', 'watch']);

    grunt.registerTask('build', ['sass:prod', 'autoprefixer:single_file', 'cssmin:prod']);
};
