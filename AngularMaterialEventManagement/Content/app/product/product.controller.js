app.controller('ProductCtrl', ['$scope', '$mdSidenav', '$location', '$rootScope', '$log', '$mdDialog',
               function ($scope, $mdSidenav, $location, $rootScope, $log, $mdDialog) {

                   $scope.isOpen = false;
                   $scope.alignment = "md-left";

                   $scope.addToCart = function (ev,productId) {
                       $mdDialog.show({
                           controller: DialogController,
                           templateUrl: '/content/app/search/add-to-cart.dialog.html',
                           parent: angular.element(document.body),
                           targetEvent: ev,
                           clickOutsideToClose: true
                       })
                       .then(function (answer) {
                           $scope.status = 'You said the information was "' + answer + '".';
                       }, function () {
                           $scope.status = 'You cancelled the dialog.';
                       });
                   };

}]);

