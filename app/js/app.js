var app = angular.module('EmailApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngSanitize']);

app.config(function ($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: './app/js/views/home.html'
        })
        .when('/emails/:id', {
            controller: 'EmailController',
            templateUrl: './app/js/views/email.html'
        })
        .when('/text/:id', {
            controller: 'EmailController',
            templateUrl: './app/js/views/text.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})