var app = angular.module('myApp', ['ngTable', 'mgcrea.ngStrap', 'ngRoute', 'ngAnimate', 'restaurant-menu']);

app.run(['$rootScope', '$timeout', '$interval', '$http', function ($rootScope, $timeout, $interval, $http) {
  
        $rootScope.bigMenuArray = [
            {
                id: '1',
                name: '北京片皮鴨(兩食)',
                price: '55.80',
                describe:'(1)片皮鴨薄餅, (2)生菜包或鴨肉炒拉麵',
                category:'烧味,餐前小食'
            },
            {
                id: '2',
                name: '北京片皮鴨(三食)',
                price: '$69.80',
                describe:'(1)片皮鴨薄餅, (2)生菜包或鴨肉炒拉麵, (3)醬爆鴨骨或鴨骨湯',
                category:'烧味,餐前小食'
            },
            {
                id: '3',
                name: '澳门烧肉皇',
                price: '28.00',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '4',
                name: '蜜汁叉烧',
                price: '22.00',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '5',
                name: '姜葱白切鸡',
                price: '22.80',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '6',
                name: '明炉烧鸭',
                price: '22.80',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '7',
                name: '廣州樓拼盤(小)',
                price: '19.80',
                describe:'海蜇,烧肉,牛蹍,叉燒',
                category:'烧味,餐前小食'
            },
            {
                id: '8',
                name: '廣州樓拼盤(大)',
                price: '38.80',
                describe:'海蜇,烧肉,牛蹍,叉燒',
                category:'烧味,餐前小食'
            },
            {
                id: '9',
                name: '拍黄瓜',
                price: '8.80',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '10',
                name: '尖椒皮蛋',
                price: '9.80',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '11',
                name: '四川凉粉',
                price: '9.80',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '12',
                name: '麻辣猪耳丝',
                price: '9.80',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '13',
                name: '四川卤牛蹍',
                price: '12.80',
                describe:'',
                category:'烧味,餐前小食'
            },
            {
                id: '14',
                name: '酥炸春卷',
                price: '5.80',
                describe:'4件',
                category:'小食'
            },
            {
                id: '15',
                name: '炸雲吞',
                price: '5.80',
                describe:'6件',
                category:'小食'
            },
            {
                id: '16',
                name: '點心',
                price: '5.80',
                describe:'蒸或炸,4件',
                category:'小食'
            },
            {
                id: '17',
                name: '咖喱角',
                price: '5.80',
                describe:'6件',
                category:'小食'
            },
            {
                id: '18',
                name: '杂锦炸拼盤',
                price: '6.80',
                describe:'',
                category:'小食'
            },
            {
                id: '19',
                name: '生菜包',
                price: '16.80',
                describe:'4件',
                category:'小食'
            },
            {
                id: '20',
                name: '椒鹽鵪鶉',
                price: '7.80',
                describe:'',
                category:'小食'
            },
            {
                id: '21',
                name: '吉列虾',
                price: '7.00',
                describe:'4件',
                category:'小食'
            },
            {
                id: '22',
                name: '虾多士',
                price: '7.00',
                describe:'4件',
                category:'小食'
            },
            {
                id: '23',
                name: '饺子',
                price: '7.20',
                describe:'蒸或煎, 4件',
                category:'小食'
            },
            {
                id: '24',
                name: '炸金带子',
                price: '7.20',
                describe:'4件',
                category:'小食'
            }
        ];
    
    

    
}]);