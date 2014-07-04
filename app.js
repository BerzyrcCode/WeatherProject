var app = angular.module('WeatherApp', []);

app.controller('WeatherCtrl', ['$scope', '$http',
    function($scope, $http) {

        /*
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                $scope.location = [];
                $scope.location.latitude = JSON.stringify(position.coords.latitude);
                $scope.location.longitude = JSON.stringify(position.coords.longitude);
                console.log($scope.location);
        */
        $http.get('//ip-api.com/json').success(function(data) {
            $scope.location = data;

            $http.get('//api.openweathermap.org/data/2.5/weather?lat=' + $scope.location.la +
                '&lon=' + $scope.location.lon + '&units=metric').then(function(data) {
                $scope.weather = data;

            })
        }).error(function() {
            $scope.message = "Something went terribly wrong :("
        })

        /*


            });
        } else {
            $scope.location = "Geolocation is not supported by this browser sorry :(";
        }
        */



    }
])