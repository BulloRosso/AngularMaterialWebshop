app.controller('IndexCtrl', ['$scope', '$mdSidenav', '$location', '$rootScope', '$log', function ($scope, $mdSidenav, $location, $rootScope, $log) {

    // autocomplete
    var self = this;
    self.simulateQuery = false;
    self.isDisabled = false;
    self.repos = loadAll();
    self.searchText = "";
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for repos... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.repos.filter(createFilterFor(query)) : [],
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }
    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `components` list of key/value pairs
     */
    function loadAll() {
        var repos = [
          {
              icon: 'restore',
              'name': 'Angular 1',
              'url': 'https://github.com/angular/angular.js',
              'watchers': '3,623',
              'forks': '16,175',
          },
          {
              icon: 'bookmark_border',
              'name': 'Angular 2',
              'url': 'https://github.com/angular/angular',
              'watchers': '469',
              'forks': '760',
          },
          {
              icon: 'bookmark_border',
              'name': 'Angular Material',
              'url': 'https://github.com/angular/material',
              'watchers': '727',
              'forks': '1,241',
          },
          {
              icon: 'bookmark_border',
              'name': 'Aower Material',
              'url': 'https://github.com/angular/bower-material',
              'watchers': '42',
              'forks': '84',
          },
          {
              icon: 'bookmark_border',
              'name': 'aterial Start',
              'url': 'https://github.com/angular/material-start',
              'watchers': '81',
              'forks': '303',
          }
        ];
        return repos.map(function (repo) {
            repo.value = repo.name.toLowerCase();
            return repo;
        });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
            return (item.value.indexOf(lowercaseQuery) === 0);
        };
    }

    $scope.toggleSearchBox = function () {
        $scope.searchBoxVisible = !$scope.searchBoxVisible;
    }

    $scope.searchBoxVisible = false;

    $scope.submitSearch = function (keyEvt) {
        if (keyEvt.which === 13 && self.searchText.length > 0) {
            location.href = "search/index/" + encodeURIComponent(self.searchText);
        }
    }

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