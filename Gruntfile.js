module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  appScripts = [
    'www/bower_components/angular/angular.min.js',
    'www/js/app.js',
    'www/js/controllers/Countdown.js',
    'www/js/services/Remaining.js'
  ];

  grunt.initConfig({
    uglify: {
      app: {
        options: {
          beautify: false,
          compress: false,
          report: 'min'
        },
        files: {
          'www/build/app.js': appScripts
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify']);
}