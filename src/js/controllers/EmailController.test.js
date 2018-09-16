describe('Controller: EmailController', function () {

    beforeEach(module('EmailApp'));

    var EmailController, 
        scope, 
        routeParams;

    beforeEach(inject(function ($controller, $rootScope, $routeParams, emails) {
        $scope = $rootScope.$new();
        routeParams = $routeParams;
        
        EmailController = $controller('EmailController', {
            $scope: scope,
            $routeParams: {id: 1}
        });
    }));

    describe('$scope.email', function () {
        it('gets data from api', function () {
            
            expect($scope.html).toEqual($scope.email.body.html);
            expect($scope.text).toEqual($scope.email.body.text);
        });
    });
});