module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    browserSync: {
      server: {
        bsFiles: {
          src: ['source/*.html', 'source/css/*.css', 'source/js/*.js'],
        },
        options: {
          server: 'source/'
        },
      },
    },
  });

  grunt.registerTask('serve', [
    'browserSync'
  ]);
};