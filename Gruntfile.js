module.exports = function(grunt) {

  grunt.initConfig({
    nwjs: {
      options: {
        version: '0.18.2',
        buildDir: './build', // Where the build version of my NW.js app is saved
        macIcns: './icon.icns', // Path to the Mac icon file
        platforms: ['osx64'], // These are the platforms that we want to build
        flavor: 'normal'
      },
      src: './src/**/*' // Your NW.js app
    },
  });

  grunt.loadNpmTasks('grunt-nw-builder');
  grunt.registerTask('default', ['nwjs']);
};
