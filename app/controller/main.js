app.controller('mainCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

$scope.order = [];
$scope.total = 0;
$scope.pickedTable = "not picked";
 
    
//check table state
    $scope.disTable6 = true;
    
        function findMenuAll() {
            $http.get('controllers/getMenuAll.php').success(function (data) {

               
                
                $scope.contacts = data;
                $scope.qty = []; 
                $scope.starters = [];
                for (i=0; i<data.length; i++)
                    {
                        if((data[i].storemenu_id < 29) && (data[i].price2 != ''))
                           {
                                var a = [];
                                a.storemenu_id = data[i].storemenu_id;
                                a.name = data[i].name;
                                a.price = data[i].price;
                                a.detail = data[i].detail;
                                $scope.qty[a.name] = 1;
                               
                                var b = [];
                                b.storemenu_id = data[i].storemenu_id;
                                b.name = data[i].name2;
                                b.price = data[i].price2;
                                b.detail = data[i].detail2;
                                $scope.qty[b.name] = 1;
                               
                                $scope.starters.push(a);
                                $scope.starters.push(b);
                           }else if (data[i].storemenu_id < 29)
                               {
                                   var a = [];
                                a.storemenu_id = data[i].storemenu_id;
                                a.name = data[i].name;
                                a.price = data[i].price;
                                a.detail = data[i].detail;
                                $scope.qty[a.name] = 1;
                                   $scope.starters.push(a);
                               }
                    }

                console.log($scope.starters);

   
                
                
                
                
                
                
 //add qty
                                         
                
                $scope.addDish = function (x) {
                                    console.log(x.name);
                                    
                                    console.log($scope.qty[x.name]);
                                    var a = [];
                                    a.name = x.name;
                                    a.price = x.price;
                                    a.detail = x.detail;
                                    a.storemenu_id = x.storemenu_id;
                                    a.qty = $scope.qty[x.name];
                                    $scope.order.push(a);
                                    $scope.total = $scope.total + ( parseInt(a.price) * a.qty);  

                                };

 //pick table
                $scope.pickTable1 = function () {
                                   $scope.pickedTable = "1";

                                };
                                $scope.pickTable2 = function () {
                                   $scope.pickedTable = "2";

                                };
                                $scope.pickTable3 = function () {
                                   $scope.pickedTable = "3";

                                };
                                $scope.pickTable4 = function () {
                                   $scope.pickedTable = "4";

                                };
                                $scope.pickTable5 = function () {
                                   $scope.pickedTable = "5";

                                };
                                $scope.pickTable6 = function () {
                                   $scope.pickedTable = "6";

                                };
  
                
                

                
                
            });
        };
        findMenuAll();

    
    //check out
                
                                $scope.checkout = function () {
                                    $http.post('controllers/checkout.php').success(function (data) {
                                        console.log(data);
                                        
                                        
                                    });
                                };
  
}]);