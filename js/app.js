var app = angular.module('boilerplate', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/dashboard", {
            templateUrl: "js/dashboard.html"

        })
        .when("/home", {
            templateUrl: "js/home.html"

        })
        .when("/profile", {
            templateUrl: "js/profile.html"

        })
})

// app.controller('FirstController', function ($scope) {
//     $scope.message = 'Hello world';
//     $scope.myFunc = function()  {
//         console.log('Hey Vaibhav, How Are You?')
//     } 
// });

// app.controller('SecondController', function ($scope) {
//     $scope.firstName = 'Vaibhav';
//     $scope.lastName = 'Gaikwad';

//     $scope.myFunc = function()  {
//         console.log('Clicked! Hey Vaibhav, How Are You?')
//     } 
// })

// app.directive("w3TestDirective", function () {
//     return {
//         template: "I was made in a directive constructor!"
//     };
// })

// app.controller("TestController", function ( $rootScope , $scope) {
//     return  $scope.template = "I was made in Test controller"
//  })