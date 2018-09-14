app.controller('EmailController', ['$scope', 'emails', '$routeParams', '$sce', '$sanitize', function($scope, emails, $routeParams, $sce, $sanitize){
    emails.then(function(response){
        console.log('ctrl email data', response.data.collection);
        $scope.email = response.data.collection.items[$routeParams.id];

        $scope.index = $routeParams.id;

        $scope.html = $sce.trustAsHtml($scope.email.body.html);

        console.log($scope.email);
        let version = "html";
        let route = "$scope.email.body." + version;
        
        $scope.display = $sce.trustAsHtml(route);
        
        version = function (word){
            $scope.version = word;
        }
        $scope.text = $scope.email.body.text;
    })
}]);