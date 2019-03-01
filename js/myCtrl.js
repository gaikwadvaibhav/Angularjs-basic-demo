app.controller('FirstController', function ($rootScope, $scope) {
    $scope.message = 'Hello world';
    $scope.myFunc = function () {
        console.log('Hey Vaibhav, How Are You?')
    }

    $rootScope.names = [{
        name: 'Jani'
    }, {
        name: 'Hege'
    }, {
        name: 'Kai'
    }]

    console.log('$scope--->>', $scope)
    $scope.myName = "Vaibhav"


    $scope.changeName = function () {
        $scope.myName = 'Who are you?'
    }


});

app.controller('SecondController', function ($rootScope, $scope, $http, $timeout, myTestdemo) {
    $scope.firstName = 'Vaibhav';
    $scope.lastName = 'Gaikwad';


    $http({
        url: 'data/test.json',
        method: "get",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    }).then((response) => {
        console.log('response', response.data)
        $rootScope.resp = response.data;
        if (response) {

        }
    })

    $scope.hex = myTestdemo.myFunc(50);
    console.log('$scope.hex', $scope.hex)




})

app.directive("w3TestDirective", function () {
    return {
        template: "I was made in a directive constructor!"
    };
})

app.controller("TestController", function ($rootScope, $scope) {
    $scope.clickMe = function () {
        console.log('Hello clickMe ---> Thank You!')
    }
    $scope.count = 0;

    return $scope.template = "I was made in Test controller"

})

app.service('myTestdemo', function () {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});


app.controller('formCtrl', function($scope) {
    $scope.master = {
        firstName: '', lastName: ''
    }
    $scope.submit = function() {
        console.log('submit', $scope.user)
    }
    $scope.reset = function() {
        console.log('Reset')
        $scope.user = angular.copy($scope.master)
    }

    $scope.x1 = 'VAIBHAV';
    $scope.x2 = angular.lowercase($scope.x1) 

})