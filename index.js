angular.module('watchApp',['ngMessages'])
	.controller('watchControl',function($scope){
	  	$scope.initialize=function(){
	  		$scope.mealPrice=null;
	  		$scope.taxRate=null;
	  		$scope.tipPercentage=null;
	  		$scope.mealValue=0;
            $scope.taxValue=0;
            $scope.totalValue=0;
            $scope.submitButton=false;
	  	}
	  	
	  	$scope.initialEarningvalue=function(){    
            $scope.totalTip=0;
            $scope.counter=0;
            $scope.aveTip=0;
	  	}
	  	$scope.initialize();
		$scope.initialEarningvalue();
	  	$scope.validateInputs=function(isvalid){
	  		
	  	}
	  	
	  	$scope.getInputs=function(isValid){
	  		$scope.submitButton=true;
            if(isValid){
	  			$scope.calculatesubtotal();
            }
        }
	  	
	  	$scope.clearInputs=function(){
	  		$scope.initialize();
	  
	  	}

	  	$scope.calculatesubtotal=function(){
	  		$scope.mealValue=$scope.mealPrice*(1+$scope.taxRate/100);
            $scope.taxValue=$scope.mealPrice*(1+$scope.taxRate/100)*$scope.tipPercentage/100;
            $scope.totalValue=$scope.mealPrice*(1+$scope.taxRate/100)*(1+$scope.tipPercentage/100);
            $scope.totalTip+=$scope.taxValue;
            $scope.counter+=1;
            $scope.aveTip=$scope.totalTip/$scope.counter;
	  	}
	  	$scope.resetValues=function(){
	  		$scope.initialize();
	  		$scope.initialEarningvalue();
	  
	  	}
	});
