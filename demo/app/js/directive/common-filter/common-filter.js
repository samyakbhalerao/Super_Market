/**
 * Created by bhalerao_sa on 5/28/2015.
 */
(function(){
    "use strict";
    console.log('common-filters.js loaded');
    angular.module('all-directives',[]).directive('availableFor',function(){
        console.log("available for inserted");
        return {
            restrict : 'E',
            template : "hello dear"
        }
    }).directive('sortBy',function(){
        console.log("sort by for inserted");
        return {
            restrict : 'E',
            templateUrl : 'js/directive/common-filter/template.sortBy.html'
        }

    }).directive('searchBox',function(){
        console.log("searchbox for inserted");
        return {
            restrict : 'E',
            templateUrl : 'js/directive/common-filter/template.searchBox.html'
        }
    });
})();
