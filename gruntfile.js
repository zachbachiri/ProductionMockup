module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/output.css' : 'css/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		casperjs: {
		    options: {
		    	async: {
			        parallel: false
			    }
		    },
		    files: ['js/tests/*.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-casperjs');
	grunt.registerTask('test', ['casperjs'])
	grunt.registerTask('default',['watch']);
}