var app = angular.module('EmailApp', ['ngRoute', 'ngSanitize']);

app.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: './dist/js/views/home.html'
        })
        .when('/emails/:id', {
            controller: 'EmailController',
            templateUrl: './dist/js/views/email.html'
        })
        .otherwise({
            redirectTo: '/'
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
});