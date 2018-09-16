app.controller('EmailController', ['$scope', 'emails', '$routeParams', '$sce', '$sanitize', function EmailController ($scope, emails, $routeParams, $sce, $sanitize) {
    emails.then(function (response) {
        
        /* get data with email id */
        $scope.email = response.data.collection.items[$routeParams.id];

        /* get email id */
        $scope.index = $routeParams.id;

        /* html content */
        $scope.html = $sce.trustAsHtml($scope.email.body.html);

        /* text content */
        $scope.text = $sce.trustAsHtml($scope.email.body.text);

        /* switch display versions */
        $scope.version = 'html';
        $scope.setVersion = function (newVersion) {
            $scope.version = newVersion;
        };
        $scope.isSet = function (version) {
            return $scope.version === version;
        };
    });
}]);

