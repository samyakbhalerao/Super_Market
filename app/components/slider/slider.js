/**
 * Created by bhalerao_sa on 5/4/2015.
 */
(function(){
    'use strict'
    angular.module('ui.bootstrap.demo', ['ui.bootstrap']).controller('CarouselDemoCtrl', function ($scope) {
        $scope.myInterval = 1999;
        var slides = $scope.slides = [];
        $scope.addSlide = function() {
            var newWidth = 1500 + slides.length + 1;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/400',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        for (var i=0; i<4; i++) {
            $scope.addSlide();
        }
    });
})();
