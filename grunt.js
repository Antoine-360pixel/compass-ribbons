/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    compass: {
      dev: {
          src: 'sass',
          dest: 'styles',
          linecomments: true,
          debugsass: false,
          forcecompile: true,
          images: 'img',
          relativeassets: true
      },
      prod: {
          src: 'sass',
          dest: 'styles',
          outputstyle: 'compressed',
          linecomments: false,
          debugsass: false,
          forcecompile: true,
          images: 'img',
          relativeassets: true
      }
    },
    server  : {
      port : 8000
    },
    reload: {
        port: 6001,
        proxy: {
            host: 'localhost',
            port: 8000
        }
    },

    watch: {
      integration: {
        files: ['sass/**/*.scss'],
        tasks: ['clear', 'compass:dev', 'reload']
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['clear']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'compass:dev server reload watch:integration');
  grunt.registerTask('dev', 'compass:dev server reload watch');

  grunt.loadNpmTasks('grunt-clear');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-reload');

};
