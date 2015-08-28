app.controller('ToolbarCtrl', ['$scope', '$mdSidenav', '$location', '$rootScope', '$log', '$mdDialog',
               function ($scope, $mdSidenav, $location, $rootScope, $log, $mdDialog) {

    $scope.toggleCart = function () {

        $mdSidenav("right").toggle();
    };

    $scope.toggleNav = function () {

        $mdSidenav("left").toggle();
    };

}]);