app.run(['$rootScope', '$mdSidenav','$log', function ($rootScope, $mdSidenav, $log) {

    // autocomplete
    
    $rootScope.simulateQuery = false;
    $rootScope.isDisabled = false;
    $rootScope.repos = loadAll();
    $rootScope.searchText = "";
    $rootScope.querySearch = querySearch;
    $rootScope.selectedItemChange = selectedItemChange;
    $rootScope.searchTextChange = searchTextChange;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for repos... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? $rootScope.repos.filter(createFilterFor(query)) : [],
            deferred;
        if ($rootScope.simulateQuery) {
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

    $rootScope.toggleSearchBox = function () {
       
        if ($rootScope.searchBoxVisible) {
            $("#mainSearchBox").css("width", "100%").css("opacity", "0");
        } else {
            $("#mainSearchBox").css("width", "0%").css("opacity", "1");
        }

        $rootScope.searchBoxVisible = !$rootScope.searchBoxVisible;
       
    }

    $rootScope.toggleNav = function () {

        $mdSidenav("left").toggle();
    };

    $rootScope.searchBoxVisible = false;

    $rootScope.submitSearch = function (keyEvt) {
        if (keyEvt.which === 13 && $rootScope.searchText.length > 0) {
            location.href = "search/index/" + encodeURIComponent($rootScope.searchText);
        }
    }

    console.log("run: initialized model");
}]);

app.config(['$mdThemingProvider',
  function ($mdThemingProvider) {

      // navigation structure
      //
      //$routeProvider.
      //  when('/index', {
      //      templateUrl: '/content/app/index/index.html',
      //      controller: 'IndexCtrl'
      //  }).
      //  when('/event/:Id', {
      //      templateUrl: '/content/app/event/event.html',
      //      controller: 'EventCtrl'
      //  }).
      //  when('/register/:Id', {
      //      templateUrl: '/content/app/register/register.html',
      //      controller: 'RegisterCtrl'
      //  }).
      //  otherwise({
      //      redirectTo: '/index'
      //  });

      // color scheme https://material.angularjs.org/latest/#/Theming/01_introduction
      //
      $mdThemingProvider.theme('default')
        .primaryPalette('orange')
        .accentPalette('amber')
        .warnPalette('red');

  }]);

app.animation('.slide-toggle', ['$animateCss', function ($animateCss) {
    var lastId = 0;
    var _cache = {};

    function getId(el) {
        var id = el[0].getAttribute("data-slide-toggle");
        if (!id) {
            id = ++lastId;
            el[0].setAttribute("data-slide-toggle", id);
        }
        return id;
    }
    function getState(id) {
        var state = _cache[id];
        if (!state) {
            state = {};
            _cache[id] = state;
        }
        return state;
    }

    function generateRunner(closing, state, animator, element, doneFn) {
        return function () {
            state.animating = true;
            state.animator = animator;
            state.doneFn = doneFn;
            animator.start().done(function () {
                if (closing && state.doneFn === doneFn) {
                    element[0].style.width = '';
                }
                state.animating = false;
                state.animator = undefined;
                state.doneFn();
            });
        }
    }

    return {
        addClass: function (element, className, doneFn) {
            if (className == 'ng-hide') {
                var state = getState(getId(element));
                var xwidth = (state.animating && state.width) ?
                    state.width : element[0].offsetWidth;

                var animator = $animateCss(element, {
                    from: { width: xwidth + 'px', opacity: 1 },
                    to: { width: '0px', opacity: 0 },
                    //easing: 'ease-out'
                });
                if (animator) {
                    if (state.animating) {
                        state.doneFn =
                          generateRunner(true,
                                         state,
                                         animator,
                                         element,
                                         doneFn);
                        return state.animator.end();
                    }
                    else {
                        state.width = xwidth;
                        return generateRunner(true,
                                              state,
                                              animator,
                                              element,
                                              doneFn)();
                    }
                }
            }
            doneFn();
        },
        removeClass: function (element, className, doneFn) {
            if (className == 'ng-hide') {
                
                var state = getState(getId(element));
                var xwidth = (state.animating && state.width) ?
                    state.width : element[0].offsetWidth;
                console.log("w: " + xwidth);
                var animator = $animateCss(element, {
                    from: { width: '0px', opacity: 0 },
                    to: { width: xwidth + 'px', opacity: 1 },
                    //easing: 'ease-in'
                });

                if (animator) {
                    if (state.animating) {
                        state.doneFn = generateRunner(false,
                                                      state,
                                                      animator,
                                                      element,
                                                      doneFn);
                        return state.animator.end();
                    }
                    else {
                        state.width = xwidth;
                        return generateRunner(false,
                                              state,
                                              animator,
                                              element,
                                              doneFn)();
                    }
                }
            }
            doneFn();
        }
    };
}]);