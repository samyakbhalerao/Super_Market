/**
 * Created by bhalerao_sa on 5/19/2015.
 */
angular
    .module('all-services', [])
    .service('getData', ['$http', 'api', function($http,api){
        this.fromUrl = function(path) {
            var requestedData = $http.get(api.app_url + path + '&sig=' + api.encryptPath(path)).success(function(data){
                var getData = data;
                return getData;
            }).error(function(response){
                var getData = response;
                return getData;
            });
            return requestedData;
        };
    }]);