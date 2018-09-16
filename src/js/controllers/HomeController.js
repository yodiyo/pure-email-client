app.controller('HomeController', ['$scope', 'emails', function HomeController ($scope, emails){
    emails.then(function(response){
        $scope.emails = response.data.collection.items;
    });
}]);