(function () {
    'use strict';

    angular.module('controllers')
    .controller('NavbarController',
        function ($scope, $location, $state){
            $scope.isActive = function (stateName) {
                if ($state.current.name.indexOf(stateName) !== -1) {
                    return true;
                } else {
                    return false;
                }
                return stateName == $state.current.name;
            };
        }
    );
})();
