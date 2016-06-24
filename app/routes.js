app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider //this format is working with compiled javascript
        .when('/menu', {
            //controller: "customersCtrl",
            templateUrl: "menu.html"
        })
        .when('/bigMenu', {
            //controller: "customersCtrl",
            templateUrl: "bigMenu.html"
        })
        .otherwise({
            templateUrl: "home.html" 
        });
}]);

