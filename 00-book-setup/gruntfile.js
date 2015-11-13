/// <binding AfterBuild='default' />

module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            toc: {
                expand: true,
                flatten: true,
                src: 'content/*.txt',
                dest: 'manuscript/'
            },
            content: {
                flatten: true,
                ext: '.txt',
                expand: true,
                src: 'content/*.md',
                dest: 'manuscript/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);
};