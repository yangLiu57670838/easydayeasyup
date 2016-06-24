app.controller('homeCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {


    $scope.visitBigMenu = function () {
        $location.path("/bigMenu");                        

    };
    
    $scope.sendMessage = function () {
        console.log('sending message now..');
        $http.post('controllers/sendmessage.php').success(function (data) {
            console.log(data);
                                        
                                        
        });                            

    };
  
}]);