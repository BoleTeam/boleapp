univerApp.controller('resultadosCtrl', ['$scope','resultadosRest',function($scope,resultadosRest) {

    $scope.pH = 0;
    $scope.pHMap = "";
    $scope.temperatura = 0;
    $scope.temperaturaMap = "";
    $scope.turbiedad = 0;
    $scope.turbiedadMap = "";
    

   resultadosRest.getResultados(function(data){
        console.log(" get  ");
        
        console.log(JSON.stringify(data));
        $scope.pH = data[0].ph;
        $scope.pHMap = parseInt($scope.pH*(100/14)).toString();
         
        $scope.temperatura = data[0].temperatura;
        $scope.temperaturaMap = parseInt($scope.temperatura*(100/50)).toString();
        
        $scope.turbiedad =  parseInt(data[0].turbiedad);  
        $scope.turbiedadMap = parseInt($scope.turbiedad*(100/500)).toString();  
    });
    
    
 

}]);
