(function(angular) {
  'use strict';
angular.module('ngViewGame', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/Map/:mapId', {
          templateUrl: 'map.html',
          controller: 'MapCtrl',
          controllerAs: 'map'
        })
        .when('/Map/:mapId/Place/:placeId', {
          templateUrl: 'place.html',
          controller: 'PlaceCtrl',
          controllerAs: 'place'
        })
        .when('/Combat/:combatId', {
          templateUrl: 'combat.html',
          controller: 'CombatCtrl',
          controllerAs: 'combat'
        });

      $locationProvider.html5Mode(true);
  }])
  .controller('MainCtrl', ['$route', '$routeParams', '$location', '$http', '$scope',
    function MainCtrl($route, $routeParams, $location, $http, $scope) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;

    $http.get("maps.json")
    .then(function(response) {
        $scope.data = response.data;
    });
    console.log($scope);
  }])
  .controller('MapCtrl', ['$routeParams', function MapCtrl($routeParams) {
    this.name = 'MapCtrl';
    this.params = $routeParams;
  }])
  .controller('PlaceCtrl', ['$routeParams', function PlaceCtrl($routeParams) {
    this.name = 'PlaceCtrl';
    this.params = $routeParams;
  }])
  .controller('CombatCtrl', ['$routeParams', function CombatCtrl($routeParams) {
    this.name = 'CombatCtrl';
    this.params = $routeParams;
  }]);
  
})(window.angular);