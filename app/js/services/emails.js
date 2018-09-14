app.factory('emails', ['$http', function($http){
    return $http.get('./app/api/emails.json')
        .then(function(data){
            return data;
        }
        ,function(err){
            return err;
        });

}]);