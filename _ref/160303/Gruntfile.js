module.exports = function(grunt){
    /*src: [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',                    
    'css/main.css',
    'bower_components/ng-table/dist/ng-table.min.css',
    'bower_components/metisMenu/dist/metisMenu.min.css',
    'bower_components/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
    'bower_components/angular-responsive-tables/release/angular-responsive-tables.min.css'
    ],
    dest: 'dist/css/styles.css',
    */
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
          ngAnnotate: {  
                   options: {
                        singleQuotes: true
                    },
                    app: {
                        files: {
                            'app/js/annotated/app.js': ['app/js/app.js'],
                            'app/js/annotated/controllers.js': ['app/js/controllers.js'],
                            'app/js/annotated/filters.js': ['app/js/filters.js'],
                            'app/js/annotated/navbar-search.js': ['app/js/navbar-search.js'],
                            'app/js/annotated/lazysizes.js': ['app/js/lazysizes.js'],
                            'app/js/annotated/common.js': ['app/js/common.js']
                        }
                    }
              },
        
        concat: {
            basic: {
              src: [                    
                    'app/js/annotated/app.js',
                    'app/js/annotated/controllers.js',
                    'app/js/annotated/filters.js',
                    'app/js/annotated/navbar-search.js',
                    'app/js/annotated/lazysizes.js',
                    'app/js/annotated/common.js'                    
                  ], //Where source js files reside
                  dest:'dist/js/minified.js', //Where to generate minified files
            }
          },
        
        
        uglify:{
          my_target: {
              files: [{
                  src: [
                      'bower_components/jquery/dist/jquery.min.js',
                      'bower_components/bootstrap/dist/js/bootstrap.min.js',
                      'app/js/angular.min.js',
                      'dist/js/minified.js'
                  ], //Where source js files reside
                  dest:'dist/js/', //Where to generate minified files
                  expand:true, //
                  flatten:true, //Remove unnecessary spaces and new lines
                  ext:'.min.js' //This will be the extension of minified files
              }]
          }
        },
        
        
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/minified.min.css': ['app/css/main.css']
                }
            }
        },
        
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index-min.html': 'index_lite.html',
                'app/widgets-min/dynamic/block_1.html': 'app/widgets/dynamic/block_1.html',
                'app/widgets-min/dynamic/block_2.html': 'app/widgets/dynamic/block_2.html',
                'app/widgets-min/dynamic/block_3.html': 'app/widgets/dynamic/block_3.html',
                  
                'app/widgets-min/features/featurebox_1.html': 'app/widgets/features/featurebox_1.html',
                'app/widgets-min/features/featurebox_2.html': 'app/widgets/features/featurebox_2.html',
                'app/widgets-min/features/featurebox_3.html': 'app/widgets/features/featurebox_3.html',
                'app/widgets-min/features/featurebox_4.html': 'app/widgets/features/featurebox_4.html',
                  
                'app/widgets-min/sections/features.html': 'app/widgets/sections/features.html',
                'app/widgets-min/sections/footer.html': 'app/widgets/sections/footer.html',
                'app/widgets-min/sections/header.html': 'app/widgets/sections/header.html',
                'app/widgets-min/sections/slideshow.html': 'app/widgets/sections/slideshow.html'
              }
            }
          }
          
            
      
        
    });
    
    
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    grunt.registerTask('default',['ngAnnotate','concat','uglify','cssmin','htmlmin']);    
}