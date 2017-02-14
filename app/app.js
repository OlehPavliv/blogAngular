$(document).ready(function(){
    $("#myModal").modal();
});

(function(){
    var blog  = angular.module("blog",[]);
    blog.controller("myCtrl",function($scope){
        $scope.user = user;
        $scope.pass = password;
        $scope.inf  = information;
        
        $scope.checkUser =function(){
            if($scope.user == $scope.login || $scope.pass==$scope.password){
                $scope.userName = $scope.user;
            }else{
                $scope.userName = 'Guest';
            }
        };
        
        $scope.addInf =function(){
            if($scope.themeField=='' || $scope.areaField==''){
                return false
            }else{
                $scope.inf.push({themeInf:$scope.themeField,messageInf:$scope.areaField});
                $scope.themeField  = ' ';
                $scope.areaField =  ' ';
            }    
        };
        
        $scope.dellInf = function($index){
            $scope.index = $index ;
            $scope.inf.splice($scope.index,1);
        };
        
        $scope.findIndex = function($index){
            $scope.index1  = $index;   
        };
        
        $scope.changeInf  = function(){
            $scope.inf[$scope.index1].themeInf = $scope.changeTheme;
            $scope.inf[$scope.index1].messageInf = $scope.changeMessage;
        }
        
    });
    
    
    var user = "Oleh",password="1234";
    
    var information = [
        {
            themeInf:'Hello',
            messageInf:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aspernatur in quasi, culpa porro ea a, magni dolor enim sit voluptate, sed, ducimus expedita architecto error. Molestias ipsum saepe aliquid repudiandae debitis maxime, esse, doloribus accusantium suscipit asperiores, explicabo possimus!'
        }
    ]
   
})();