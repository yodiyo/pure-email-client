describe('Email app routes', function () {

    // load controller module
    beforeEach(module('EmailApp'));

    it('should test routes', inject(function ($route) {
       
        expect($route.routes['/'].controller).toBe('HomeController');
        expect($route.routes['/'].templateUrl).toBe('./dist/js/views/home.html');

        expect($route.routes['/emails/:id'].controller).toBe('EmailController');
        expect($route.routes['/emails/:id'].templateUrl).toBe('./dist/js/views/email.html');

        expect($route.routes[null].redirectTo).toEqual('/');
    }));
});