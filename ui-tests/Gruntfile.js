module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            'default': {
                src: ['src/test/**/*.ts', 'typings/**/*.ts'],
                reference: 'src/test/reference.ts',
                out: 'dist/app.js',
                options: {
                    //module : "commonjs"
                }
            },
            'dev': {}
        },
        tsd: {
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: true,
                    config: 'tsd.json'
                }
            }
        },
        clean: {
            //build: ["src/test"],
            release: ["dist"]
        },
        watch: {
            js: {
                files: ['src/**/*.ts'],
                tasks: ['tsd', 'ts'],
                options: {livereload: false}
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tsd');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['tsd', 'ts'])
};
