app.controller('EventCtrl', ['$scope', '$routeParams', '$rootScope', '$location', '$mdSidenav',
               function ($scope, $routeParams, $rootScope, $location, $mdSidenav) {

    $scope.CurrentId = $routeParams.Id;
    $scope.Event = _.findWhere($rootScope.EventList, { Id: parseInt($scope.CurrentId) });


    $scope.navigateUp = function () {

        $location.path("/index");
    }

    $scope.register = function () {

        $location.path("/register/" + $scope.CurrentId);
    }

    $scope.toggleChatPane = function () {

        $mdSidenav('chatpane').open()
        .then(function () {
            $log.debug("close LEFT is done");
        });
    }



    

}]);