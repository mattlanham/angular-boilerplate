var myApp = angular.module('myApp', ['controllers', 'models', 'directives', 'ui.router']);
angular.module('controllers', []);
angular.module('models', []);
angular.module('directives', []);

var apiURL = '';

if (window.location.host.indexOf('.com') !== -1) {
    apiURL = 'http://localhost:3000';
} else {
    apiURL = 'http://someserver.com';
}

myApp.config(['$stateProvider', function($stateProvider){

    $stateProvider
        .state('home', {
            url         : "",
            templateUrl : "/app/views/home.html",
            controller  : 'HomeController'
        })
        .state('something', {
            url         : "/something",
            templateUrl : "/app/views/something.html",
            controller  : 'SomethingController'
        });

}]);

angular.module("myApp").run(function () {

});
