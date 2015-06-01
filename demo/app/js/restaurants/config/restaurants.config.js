/**
 * Created by bhalerao_sa on 6/1/2015.
 */
(function(){
    "use strict";
    angular.module('restaurant_module',['ui.router']).config(['$stateProvider',function($stateProvider){
        $stateProvider.state('restaurants',{

            url : '/restaurants',
            templateUrl: 'js/restaurants/views/restaurant.view.tpl.html',
            controller : 'restaurant.CTRL'
        }).state('restaurants.restaurants_list', {
           url : '/restaurants/restaurant_list',
            templateUrl : 'js/restaurants/views/restaurants_list.view.tpl.html',
            controller : 'restaurant.restaurant_list.CTRL'
        }).state('restaurants.meals', {
                url : '/restaurants/meals',
                templateUrl : 'js/restaurants/views/meals.view.tpl.html',
                controller : 'restaurant.meals.CTRL'
            }).state('restaurants.cusines', {
            url : '/restaurants/cusines',
            templateUrl : 'js/restaurants/views/cusines.view.tpl.html',
            controller : 'restaurant.cusines.CTRL'
        });
       // $sceProvider.enabled(false);
    }]);
})();