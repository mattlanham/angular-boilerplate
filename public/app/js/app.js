var myApp = angular.module('myApp', ['controllers', 'models', 'directives', 'ui.router']);
angular.module('controllers', []);
angular.module('models', []);
angular.module('directives', []);

myApp.config(function($stateProvider){

    $stateProvider
        .state('home', {
            url         : "",
            templateUrl : "/views/home.html",
            controller  : 'HomeController'
        })
        .state('something', {
            url         : "/something",
            templateUrl : "/views/somthing.html",
            controller  : 'SomethingController'
        });

});

angular.module("myApp").run(function () {});
