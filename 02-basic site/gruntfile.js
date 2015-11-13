/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    options: {
        src: 'src',
        dest: 'wwwroot'
    },
    connect: {
       server: {
         options: {
           port: 9001,
           base: '<%= options.dest %>',
           keepalive: true
         }
       }
     },
     copy: {
       main: {
        files: [
          // php handlers
          {
            expand: true,
            flatten: true,
            src: ['<%= options.src %>/bin/*'],
            dest: '<%= options.dest %>/bin/',
            filter: 'isFile'
          },
          // glyphicon fonts
          {
            expand: true,
            flatten: true,
            src: ['<%= options.src %>/fonts/*.*'],
            dest: '<%= options.dest %>/fonts'
          },
          // bootstrap and custom css
          {
            expand: true,
            flatten: true,
            src: ['<%= options.src %>/css/*.min.css', '<%= options.src %>/css/modern-business.css'],
            dest: '<%= options.dest %>/css'
          },
          // font-awesome files
          {
            expand: true,
            cwd: '<%= options.src %>/font-awesome',
            src: ['fonts/**', 'css/*.min.css'],
            dest: '<%= options.dest %>/font-awesome/'
          },
          // JavaScript libraries
          {
            expand: true,
            flatten: true,
            src: ['<%= options.src %>/js/*.min.js',
              '<%= options.src %>/js/contact_me.js',
              '<%= options.src %>/js/jqBootstrapValidation.js',
              '<%= options.src %>/js/jquery.js'
            ],
            dest: '<%= options.dest %>/js'
          },
          // html files
          {
            expand: true,
            flatten: true,
            src: ['<%= options.src %>/*.html'],
            dest: '<%= options.dest %>/'
          }
        ],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
};
