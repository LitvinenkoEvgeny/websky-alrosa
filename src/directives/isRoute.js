var app = angular.module('app');

app.directive('isRoute', function () {
    return {
        scope: false,
        bindToController: true,
        scopeAs: 'isRoute',
        controller: 'isRouteController'
    }
});

app.controller('isRouteController', ['$scope', isRouteController]);

function isRouteController($scope) {
    var vm = this;
    console.log($vm, $scope);
}