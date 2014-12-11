module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      test: './test/*',
      server: './server.js',
      controllers: './src/*',
      javascripts: './public/js/*'
    },

    mocha_casperjs: {
      files: {
        src: ['./test/*']
      }
    },

    express: {
      options: {
      // Override defaults here
    },
    dev: {
      options: {
        script: './server.js'
      }
    }
  },

    watch: {
      scripts: {
        files: ['./views/*',
                './test/*'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['express', 'jshint', 'mocha_casperjs']);
  
};