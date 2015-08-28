app.controller('WelcomeCtrl', ['$scope', '$mdSidenav', '$location', '$rootScope', '$log', '$mdDialog',
               function ($scope, $mdSidenav, $location, $rootScope, $log, $mdDialog) {

    $scope.Promotions = [
        {
            CssClass: 'promo-full-image',
            Html: null,
            BackgroundColorCss: null,
            IconName: null,
            ImageUrl: "/content/img/house.png",
            RowSpan: 3,
            ColSpan: 2,
            RowSpanSm: 1,
            ColSpanSm: 1,
            HasCallToAction: false,
            Title: "Neue Filiale in Frankfurt"
        },
        {
            CssClass: 'promo-product',
            Html: null,
            BackgroundColorCss: null,
            IconName: 'new_releases',
            ImageUrl: "/content/img/product-3.jpg",
            RowSpan: 1,
            ColSpan: 1,
            RowSpanSm: 1,
            ColSpanSm: 1,
            HasCallToAction: false,
            Title: "NEU: Gel Cumulus"
        },
            {
                CssClass: 'promo-product',
                Html: null,
                BackgroundColorCss: null,
                IconName: 'new_releases',
                ImageUrl: "/content/img/product-2.jpg",
                RowSpan: 1,
                ColSpan: 1,
                RowSpanSm: 1,
                ColSpanSm: 1,
                HasCallToAction: false,
                Title: "NEU: Gel Maestro"
            },
            {
                IconName: null,
                Html: null,
                BackgroundColorCss: null,
                CssClass: 'promo-full',
                ImageUrl: "/content/img/promo-1.png",
                RowSpan: 1,
                ColSpan: 2,
                RowSpanSm: 1,
                ColSpanSm: 1,
                HasCallToAction: true,
                CallToActionIconName: 'people',
                Title: "Jetzt zum Lauftreff anmelden!"
            },
            {
                CssClass: 'promo-full-image',
                BackgroundColorCss: null,
                Html: null,
                IconName: null,
                ImageUrl: "/content/img/fashion.png",
                RowSpan: 2,
                ColSpan: 2,
                RowSpanSm: 1,
                ColSpanSm: 1,
                HasCallToAction: false,
                Title: "Fashion-Show in München"
            },
            {
                CssClass: '',
                BackgroundColorCss: 'promo-green',
                Html: '<div class="promo-text-section">Im Sommer länger für Sie geöffnet:<br/>Mo-Fr: 7:00 bis 18:00<br />Sa: 7:00 bis 12:00</div>',
                IconName: 'event',
                ImageUrl: null,
                RowSpan: 1,
                ColSpan: 2,
                RowSpanSm: 1,
                ColSpanSm: 1,
                HasCallToAction: false,
                Title: "Unsere Öffnungszeiten"
            }
    ];

    $scope.isTextPromo = function (promo) {
        return (promo.BackgroundColorCss == null);
    }


    $scope.toggleCart = function () {

        $mdSidenav("right").toggle();
    };

}]);