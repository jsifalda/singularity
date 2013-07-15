module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ftp-deploy');

  appScripts = [
    'www/bower_components/angular/angular.min.js',
    'www/js/app.js',
    'www/js/controllers/Countdown.js',
    'www/js/services/Remaining.js'
  ];

  cssminFiles = [
    'www/bower_components/pure/src/base/css/normalize.css',
    'www/bower_components/pure/src/base/css/normalize-context.css',
    'www/bower_components/pure/src/buttons/css/buttons-core.css',
    'www/bower_components/pure/src/buttons/css/buttons.css',
    'www/bower_components/pure/src/grids/css/grids-core.css',
    'www/bower_components/pure/src/grids/css/grids-r.css',
    'www/bower_components/pure/src/grids/css/grids-units.css',
    'www/css/core.css'
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
    },
    cssmin: {
      app: {
        files: {
          'www/build/core.css': cssminFiles
        }
      }
    },

    'ftp-deploy': {
      build: {
        auth: {
          host: '16533.w33.wedos.net',
          port: 21,
          authKey: 'key1'
        },
        src: 'www',
        dest: '/domains/singularity.jsifalda.name',
        exclusions: ['www/bower_components']
      }
    }
  });

  grunt.registerTask('default', ['uglify', 'cssmin']);
}