app.controller('IndexCtrl', ['$scope', '$mdSidenav', '$location', '$rootScope', function ($scope, $mdSidenav, $location, $rootScope) {

    // Filter: default values
    //
    $scope.filterRange = 20;
    $scope.filterShowFullyBooked = false;
    $scope.filterStartDate = new Date();
    $scope.filterEndDate = null;

    $scope.filterShowFullyBookedLabel = function () {
        if (!$scope.filterShowFullyBooked) {
            return "will be shown";
        } else {
            return "are not displayed";
        }
    };

    $scope.EventListFiltered = function () {
        return _.filter($rootScope.EventList, function (itm) {

            var bookedCriteria = true;
            if ($scope.filterShowFullyBooked) {
                bookedCriteria = (itm.Participants < itm.ParticipantsMax);
            }
            var rangeCriteria = (itm.Range <= $scope.filterRange);

            return rangeCriteria && bookedCriteria;
        });
    };

    $scope.hasDateFiltersActive = function () {

        var vis = ($scope.filterStartDate != null || $scope.filterEndDate != null);
     
        return vis;
    }

    $scope.allocationState = function (evt) {

        var perc = evt.Participants / evt.ParticipantsMax;

        return (perc * 100);
    };

    $scope.freeSeats = function (evt) {

        return evt.ParticipantsMax - evt.Participants;
    }

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.navigate = function (id) {

        $location.path("/event/" + id);
    };

   

}]);