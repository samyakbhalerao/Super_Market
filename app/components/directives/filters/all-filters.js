/**
 * Created by bhalerao_sa on 5/28/2015.
 */
(function(){
    "use strict";
    angular.module('all-directives',[]).directive('availableFor',function(){
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = 'components/includes/availabeFor.html';
        return directive;
  }).directive('sortBy',function(){
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = 'components/includes/sortBy.html';
        return directive;
    }).directive('searchBox',function(){
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = 'components/includes/searchBox.html';
        return directive;
    });

})();