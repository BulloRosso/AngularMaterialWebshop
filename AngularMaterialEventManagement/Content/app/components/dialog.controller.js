app.controller('DialogCtrl', ['$scope', '$mdSidenav', '$location', '$rootScope', '$log', '$mdDialog',
               function ($scope, $mdSidenav, $location, $rootScope, $log, $mdDialog) {

    $scope.ResultItems = passSearchResult;

    $scope.State = "Auf Lager";

    $scope.States = ["Auf Lager", "Lieferbar in 3-5 Tagen", "Auf Anfrage" ];

    $scope.gotoProduct = function (id) {

        document.location.href = "/product/index/" + id;
    }

    $scope.getPriceLabel = function (price) {

        return price.toFixed(2).replace(".", ",") + " €";
    }

    $scope.addToCart = function (productId) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '/content/app/search/add-to-cart.dialog.html',
            parent: angular.element(document.body),
            //targetEvent: ev,
            clickOutsideToClose: true
        })
        .then(function (answer) {
             $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
             $scope.status = 'You cancelled the dialog.';
        });
    };

}]);

function DialogController($scope, $mdDialog) {

    $scope.addCount = 1;
    $scope.addSum = "15,10 €";
    $scope.addPrice = 15.10;

    $scope.incCount = function () {

        $scope.addCount++;

        $scope.updateSum();
    }

    $scope.updateSum = function () {
        $scope.addSum = ($scope.addPrice * $scope.addCount).toFixed(2).replace(".", ",") + " €";
    }

    $scope.decCount = function () {

        if ($scope.addCount == 1) {
            return;
        }

        $scope.addCount--;

        $scope.updateSum();
    }

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}