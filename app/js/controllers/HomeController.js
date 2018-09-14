app.controller('HomeController', ['$scope', 'emails', function($scope, emails){
    emails.then(function(response){
        $scope.emails = response.data.collection.items;
    })
}]);