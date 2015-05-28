/**
 * Created by bhalerao_sa on 5/28/2015.
 */
(function(){
    "use strict";
    angular.module('controllers',[]).controller('sortFilter.CTRL',['$scope',function($scope){
        $scope.model={};
        $scope.model.sortByDropdown = {
            options: [{
                text: 'Discount',
                value: 'delivery'
            }, {
                text: 'Delivery time',
                value: 'delivery-time'
            }, {
                text: 'Distance',
                value: 'distance'
            },{
                text: 'Minimum order',
                value: 'minimum-order'
            },{
                text: 'Average pricing',
                value: 'average-pricing'
            },{
                text: 'Rating',
                value: 'rating'
            },{
                text: 'Restaurant name',
                value: 'restaurant-name'
            }]
        };
    }]);;
})();