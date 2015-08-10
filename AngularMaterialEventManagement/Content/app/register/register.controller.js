app.controller('RegisterCtrl', ['$scope', '$routeParams', '$rootScope', '$location', function ($scope, $routeParams, $rootScope, $location) {

    $scope.CurrentId = $routeParams.Id;
    $scope.Event = _.findWhere($rootScope.EventList, { Id: parseInt($scope.CurrentId) });

    $scope.user = {
        firstName : "Ralph",
        lastName : "Göllner",
        company : "e-ntegration GmbH",
        city: "Rückersdorf",
        zipCode: "90607"
    };

    $scope.navigateUp = function () {

        $location.path("/event/" + $scope.CurrentId);
    }
}]);