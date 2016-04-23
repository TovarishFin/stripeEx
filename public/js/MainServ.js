angular.module('MainServMod',[])
  .factory('MainServ', ['$http', function($http){
    call={};
    call.sendPayment=function(payment){
      return $http({
        method: 'POST',
        url: '/sendpayment',
        data: payment,
      });
    };
    return call;
  }]);
