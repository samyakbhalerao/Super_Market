/**
 * Created by bhalerao_sa on 5/28/2015.
 */
(function(){
    'use strict';
    var app = angular.module('Viki',['ui.router', 'angAccordion', 'slider', 'snap', 'all-services', 'api-params', 'all-directives', 'viki-controllers', 'all-filters']);
    /*App Routes*/
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$sceProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $sceProvider){
        $stateProvider.state('home',{
            url : '/home',
            templateUrl: 'src/views/home.html',
            controller : 'appHomeController'
        })
            .state('login', {
                url : '/login',
                templateUrl : 'src/views/login.html',
                controller : 'appLoginController'
            })
            .state('activities', {
                url : '/activity',
                templateUrl : 'src/views/activity.html',
                controller : 'appActivityController'
            })
            .state('category', {
                url : '/category/:page',
                templateUrl : 'src/views/category.html',
                controller : 'appCategoryController'
            })
            .state('player', {
                url : '/player',
                templateUrl : 'src/views/player.html',
                controller : 'appVideoPlayer'
            })
            .state('detail-page', {
                url : '/details',
                templateUrl : 'src/views/details.html',
                controller : 'appVideoDetails'
            })
            .state('search', {
                url : '/search',
                templateUrl : 'src/views/search.html',
                controller : 'appSearchController'
            })
            .state('settings', {
                url : '/settings',
                templateUrl : 'src/views/settings.html',
                controller : 'appSettings'
            })
            .state('info', {
                url : '/info/:page',
                templateUrl : 'src/views/info.html',
                controller : 'appInfo'
            });
        $sceProvider.enabled(false);
    }]);
    /*App Routes*/
})();