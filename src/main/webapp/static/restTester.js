var app = angular.module('restTestApp', []);

app.controller('restTestAppcontroller', function($scope, $http) {	
    $scope.methods =[
    	{name:"GET"},
    	{name:"POST"}
    ];

	$scope.processRequest = function() {
		var methodName = $scope.requestMethod.name;
		if(methodName=="GET"){
			$scope.requestBody = "";
		}
			
		$http({
			method : $scope.requestMethod.name,
			url : $scope.requestUrl,
			data : $scope.requestBody,
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function successCallback(response) {
			console.log("success:");
			$scope.responseData = JSON.stringify(response.data, null, 2);
		}, function errorCallback(response) {
			console.log("fail:");
			$scope.responseData = JSON.stringify(response.data, null, 2);
		});
	}
});