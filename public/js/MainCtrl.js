angular.module('MainCtrlMod',[])
  .controller('HomeCtrl',['$scope', 'MainServ', function($scope, MainServ){
    $scope.payment={};
    $scope.payment.amount='199.99'
    $scope.beginPayment=function(){
      MainServ.sendPayment($scope.payment)
        .then(function(data, err){
          if(err){
            console.log(err);
            $scope.paymentSent=true;
          } else {
            $scope.response=data.data;
            $scope.paymentSent=true;
          };
        });
    };
  }])
