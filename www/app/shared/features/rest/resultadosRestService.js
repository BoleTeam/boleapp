univerApp.factory('resultadosRest', ['$http', function($http){
        return{
            getResultados: function(callback){
                var req = {
                    method: 'GET',
                     //url: "misc/pruebas.json",
                    //url: "https://dl.dropboxusercontent.com/u/106554818/prueba.json",
                    url:"http://172.26.7.149:8080/BoleSensing/webresources/medicion/getMuestra",
                    headers: {
                        'Content-Type': 'json'
                    }}
                $http(req)
                    .success(function(data) {
                        // prepare data here
                        callback(data);
                    });
            }
        };
    }]);

