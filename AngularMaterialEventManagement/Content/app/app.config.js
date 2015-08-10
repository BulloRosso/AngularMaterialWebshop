app.run(['$rootScope', function ($rootScope) {

    $rootScope.EventList = [
        {
            Id: 1,
            Title: 'Architecture Photography',
            Description: 'Learn how to take stunning pictures of buildings and how to enhance them using Photoshop CS...',
            ImagePath: 'event-1.png',
            Range: 10,
            ParticipantsMax: 20,
            Participants: 2
        },
        {
            Id: 2,
            Title: 'Landscape Photography',
            Description: 'Learn how to take stunning pictures of landscapes and how to enhance them using Photoshop CS...',
            ImagePath: 'event-2.png',
            Range: 20,
            ParticipantsMax: 10,
            Participants: 10
        },
        {
            Id: 3,
            Title: 'Portrait Photography',
            Description: 'Learn how to take stunning pictures of people and how to enhance them using Photoshop CS...',
            ImagePath: 'event-3.png',
            Range: 30,
            ParticipantsMax: 15,
            Participants: 8
        },
        {
            Id: 4,
            Title: 'Animal Photography',
            Description: 'Learn how to take stunning pictures of animals and how to enhance them using Photoshop CS...',
            ImagePath: 'event-4.png',
            Range: 40,
            ParticipantsMax: 40,
            Participants: 37
        }
    ];
    console.log("run: initialized model");
}]);

app.config(['$routeProvider', '$mdThemingProvider',
  function ($routeProvider,$mdThemingProvider) {

      // navigation structure
      //
      $routeProvider.
        when('/index', {
            templateUrl: '/content/app/index/index.html',
            controller: 'IndexCtrl'
        }).
        when('/event/:Id', {
            templateUrl: '/content/app/event/event.html',
            controller: 'EventCtrl'
        }).
        when('/register/:Id', {
            templateUrl: '/content/app/register/register.html',
            controller: 'RegisterCtrl'
        }).
        otherwise({
            redirectTo: '/index'
        });

      // color scheme https://material.angularjs.org/latest/#/Theming/01_introduction
      //
      $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('amber')
        .warnPalette('red');

  }]);