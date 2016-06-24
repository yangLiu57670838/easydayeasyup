app.controller('bigMenuCtrl', ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
    
    console.log($rootScope.bigMenuArray);
    
    
//    $scope.menu = [];
//    
//    var onedish = [];
//    
//    for (i=0; i<$rootScope.bigMenuArray.length; i++)
//        {
//            
//            if (i == 0)
//                {
//                    var oneJson = {
//                        name: $rootScope.bigMenuArray[i].name,
//                        description: $rootScope.bigMenuArray[i].describe,
//                        img: '../js/restaurant-menu/images/11.jpg',
//                        link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html',
//                        price: $rootScope.bigMenuArray[i].price
//                    }
//                    onedish.push(oneJson);   
//                }else if ($rootScope.bigMenuArray[i].category == $rootScope.bigMenuArray[i-1].category)
//                    {
//                        var oneJson = {
//                            name: $rootScope.bigMenuArray[i].name,
//                            description: $rootScope.bigMenuArray[i].describe,
//                            img: '../js/restaurant-menu/images/11.jpg',
//                            link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html',
//                            price: $rootScope.bigMenuArray[i].price
//                        }
//                        onedish.push(oneJson);
//                    }else if ($rootScope.bigMenuArray[i].category != $rootScope.bigMenuArray[i-1].category)
//                        {
//                            var lagerJson = {
//                                title: $rootScope.bigMenuArray[i-1].category,
//                                dishes: onedish
//                            }
//                            $scope.menu.push(lagerJson);
//                            
//                                onedish = [];
//                                var oneJson = {
//                                    name: $rootScope.bigMenuArray[i].name,
//                                    description: $rootScope.bigMenuArray[i].describe,
//                                    img: '../js/restaurant-menu/images/11.jpg',
//                                    link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html',
//                                    price: $rootScope.bigMenuArray[i].price
//                                }
//                                onedish.push(oneJson);
//                            
//                            
//                        }
//        }

$scope.menu = [
        {title: '烧味,餐前小食',dishes: [ 
            { name: '北京片皮鴨(兩食)', description: '(1)片皮鴨薄餅, (2)生菜包或鴨肉炒拉麵', img: 'angular-restaurant-menu-master/images/1.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 55.80 }, 
            { name: '北京片皮鴨(三食)', description: '(1)片皮鴨薄餅, (2)生菜包或鴨肉炒拉麵, (3)醬爆鴨骨或鴨骨湯', img: 'angular-restaurant-menu-master/images/2.jpg', link: '', price: 69.80 },
            { name: '澳门烧肉皇', description: '', img: 'angular-restaurant-menu-master/images/3.jpg', link: '', price: 28.00 },
            { name: '蜜汁叉烧', description: '', img: 'angular-restaurant-menu-master/images/4.jpg', link: '', price: 22.00 },
            { name: '姜葱白切鸡', description: 'angular-restaurant-menu-master/images/5.jpg', img: '', link: '', price: 22.80 },
            { name: '明炉烧鸭', description: '', img: '', link: '', price: 22.80 },
            { name: '廣州樓拼盤(小)', description: '海蜇,烧肉,牛蹍,叉燒', img: '', link: '', price: 19.80 },
        { name: '廣州樓拼盤(大)', description: '海蜇,烧肉,牛蹍,叉燒', img: '', link: '', price: 38.80 },
        { name: '拍黄瓜', description: '', img: '', link: '', price: 8.80 },
        { name: '尖椒皮蛋', description: '', img: '', link: '', price: 9.80 },
        { name: '四川凉粉', description: '', img: '', link: '', price: 9.80 },
        { name: '麻辣猪耳丝', description: '', img: '', link: '', price: 9.80 },
        { name: '四川卤牛蹍', description: '', img: '', link: '', price: 12.80 }]}, 
        {title: '小食',dishes: [ 
            { name: '酥炸春卷', description: '4件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 5.80 },
        { name: '炸雲吞', description: '6件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 5.80 },
        { name: '點心', description: '蒸或炸,4件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 5.80 },
       { name: '咖喱角', description: '6件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 5.80 },
        { name: '杂锦炸拼盤', description: '', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 6.80 },
        { name: '生菜包', description: '4件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 16.80 },
       { name: '椒鹽鵪鶉', description: '', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 7.80 },
        { name: '吉列虾', description: '4件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 7.00 },
        { name: '虾多士', description: '4件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 7.00 },
        { name: '饺子', description: '蒸或煎, 4件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 7.20 },
       { name: '炸金带子', description: '4件', img: 'images/11.jpg', link: 'http://herbivoracious.com/2009/03/panfried-gnocchi-with-arugula-recipe.html', price: 7.20 }]}, 
        {title: 'Dessert',dishes: [ 
            { name: 'Rigatoni di Cavolfiore', description: 'Rigatoni with roasted cauliflower and spicy tomato sauce' , img: 'images/3.jpg', link: 'http://herbivoracious.com/2012/09/rigatoni-with-roasted-cauliflower-and-spicy-tomato-sauce-recipe.html' } ]}];
    
    $scope.menucover= { title: '广州楼', description: '布里斯班海鲜酒楼，送餐', streetaddress: '2922-2926 Logan Rd.', city: 'Underwood', state: 'QLD', zip: '4119', phone:'(07) 3162 2181' };
    
    
    
    
    $scope.printTest = function () {
			console.log('start printing');
             $http.post('controllers/printtest.php').success(function (data) {
                 console.log(data);                         
             });  
        
        connect();
        var ePosDev = new epson.ePOSDevice();
        function connect() {
            var ipAddress = '192.168.0.20'; var port = '8008';
            ePosDev.connect(ipAddress, port, callback_connect);
    
            }
        
        function callback_connect(resultConnect){
            var deviceId = 'local_printer'; 
            var options = {'crypto' : false, 'buffer' : false};
                
            if ((resultConnect == 'OK') || (resultConnect == 'SSL_CONNECT_OK')) { 
                //Retrieves the Printer object 
                ePosDev.createDevice(deviceID, ePosDev.DEVICE_TYPE_PRINTER, options, callback_createDevice); 
                } else { 
                    //Displays error messages
                    console.log('error1');
            } 
        }
        
        var printer = null;
        function callback_createDevice(deviceObj, errorCode){ 
            if (deviceObj === null) { 
                //Displays an error message if the system fails to retrieve the Printer object 
                return; 
            } printer = deviceObj;
            
            //Registers the print complete event
            printer.onreceive = function(response)
            {
                if (response.success) { 
                    //Displays the successful print message
                    console.log('success');
                } else { 
                    //Displays error messages
                    console.log('not success');
                } 
            };
        }
        
        function createData(){
            printer.addTextAlign(printer.ALIGN_CENTER); 
            printer.addText('Hello World\n'); 
        }

        function send(){ 
            if (ePosDev.isConnected)
                {
                    printer.send(); 
                } 
        }
        
        
					
    };	
  
}]);