// Created by Satenik on 7/14/2016.

userRegApp.controller('RegisterController', function($scope){

    $scope.users = users;
    $scope.addUser = function(newUser){
        $scope.users.push(newUser);
        console.log($scope.users)
    };



});



users = [
    {
        name:"Satenik Markosyan",
        email:"satmark87@yahoo.com",
        phone:"+374 55 112345",
        password: "12345Password",
        imgURL:"../../img/1.jpg",
        isTasker:true,

    },
    {
        name:"Lisa Manukyan",
        email:"lisamanukyan@gmail.com",
        phone:"+374 55 223456",
        password: "45679Password",
        imgURL:"../../img/2.jpg",
        isTasker:false,

    }
];