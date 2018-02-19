var d3Test = angular.module('d3Test', ['ngRoute','ngResource', 'datamaps', 'nvd3']);



d3Test.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});

d3Test.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
  when('/home', {
      controller: 'MainController',
      templateUrl: 'partials/home.html',
      resolve: {
        test1: function(Model){
          Model.readfile();
        }
      }
    }).
  when('/ABOUT', {
      controller: 'MainController',
      templateUrl: 'partials/about.html',
    }).
  when('/CONTACT', {
      controller: 'MainController',
      templateUrl: 'partials/contact.html',
    }).
  when('/PROJECTS', {
      controller: 'MainController',
      templateUrl: 'partials/projects.html',
    }).
  otherwise('/home', {
      controller: 'MainController',
      templateUrl: 'partials/home.html',
      });
}]);


