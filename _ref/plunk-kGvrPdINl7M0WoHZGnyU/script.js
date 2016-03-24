angular.module('resolveMe', [
  'ui.router'
])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/parent/1/edit');

      $stateProvider
        .state('parent', {
          url: '/parent',
          //abstract: true,
          templateUrl: 'views.parentview.html',
          controller: function($scope) {},
        });

      $stateProvider
        .state('parent.child', {
          url: '/child/:someSwitch',
          views: {
            "page": {
              templateProvider: function($http, $stateParams, GetName) {

                // async service to get template name from DB
                return GetName
                    .get($stateParams.someSwitch)
                    // now we have a name
                    .then(function(obj){
                       return $http
                          // let's ask for a template
                          .get(obj.templateName)
                          .then(function(tpl){
                              // haleluja... return template
                              return tpl.data;
                       });      
                    })
                
              }, 
              controller: 'viewCtrl',
            }
          }
        });

    }
  ])
  .controller('viewCtrl', function($scope) {})
  .factory('GetName', ['$http', '$timeout',
    function($http, $timeout) {
      return {
        get : function(id) {
          // let's get data via $http
          // here it is the list, but 
          // should be some GetById method
          return $http
            .get("dataFromServer.json")
            .then(function(response){
              
              // simplified converter
              // taking the $http result and 
              // by id gets the name
              var converter = response.data;
              var name = converter[id];
              
              return {templateName : name}; 
          });
        },
      };
    }
  ]);
  
  
  
  
  
  
  
  
  
  