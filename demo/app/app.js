/**
 * Created by bhalerao_sa on 5/28/2015.
 */
(function(){
    "use strict";
  var app=angular.module("testApp",['ui.router','all-directives','restaurant_module']);
   /* app.config(['$locationProvider','$urlRouterProvider',
            function($locationProvider,$urlRouterProvider) {
                //$locationProvider.hashPrefix('!');
                $urlRouterProvider.otherwise( '/' );

            }
        ]
    );*/
    app.controller("main.CTRL",['$scope',function($scope){
        $scope.test="Hey samyak";
        console.log('welcome '+ $scope.test);
    }]);

})();