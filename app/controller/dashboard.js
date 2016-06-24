app.controller('dashboardCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {


    $scope.sendMessage = function () {
        console.log('sending message now..');
        $http.post('controllers/sendmessage.php').success(function (data) {
            console.log(data);
                                        
                                        
        });                            

    };
  
}]);