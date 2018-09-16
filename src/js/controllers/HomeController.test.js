describe('list emails', function () {
    var scope, httpBackend, createController;

    beforeEach(module('EmailApp'));

    beforeEach(inject(function ($rootScope, $httpBackend, $controller) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();

        createController = function () {
            return $controller('HomeController', {
                '$scope': scope;
            });
        };
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should check response from data api', function () {
        var controller = createController();
        scope.urlToScrape = 'success.com';

        httpBackend.expect('GET', '/slurp?urlToScrape=http:%2F%2Fsuccess.com')
            .respond({
                "success": true,
                "links": ["./dist/api/emails.json"]
            });

        // have to use $apply to trigger the $digest which will
        // take care of the HTTP request
        scope.$apply(function () {
            scope.runTest();
        });

        expect(scope.parseOriginalUrlStatus).toEqual('calling');

        httpBackend.flush();

        expect(scope.retrievedUrls).toEqual(["./dist/api/emails.json"]);
        expect(scope.parseOriginalUrlStatus).toEqual('waiting');
        expect(scope.doneScrapingOriginalUrl).toEqual(true);
    });
});