var deposistsCalculator = angular.module("deposistsCalculator", ["angucomplete-alt"]);

var controller = deposistsCalculator.controller("DepositsController", function($scope) {

	var generateRef = function(){
		return "#" + (ref++);
	}


	var ctrl = this;
	var ref = 1;


	var generateSampleDeposit = function(){
		return { 
			"ref":generateRef(), 
			"deposit":"RD", 
			"amount": 100, 
			"interest_rate": 9, 
			"months": 12, 
			"maturity":0, 
			"interest_gained":0, 
			"inflation_rate":3, 
			"inflation_adjusted":0 
		};
	}

	$scope.deposits = [];

	$scope.references = [];

	var reCalculate = function(data){
		if(data.deposit == "RD"){
			var output = reccuringDepositWithInflationAdjustment(data.amount,data.months,data.interest_rate,data.inflation_rate);
		} else if (data.deposit == "FD"){
			var output = fixedDepositWithInflationAdjustment(data.amount,data.months,data.interest_rate,data.inflation_rate);
		}
		

		data.effectiveReturns = output.effectiveReturns;
		data.totalInvestment = output.totalInvestment;
		data.maturity = output.finalAmount;
		data.interest_gained = output.totalInterest;
		data.inflation_adjusted = output.finalAmountInflationAdjusted;
		data.effectiveReturns = output.effectiveReturns;

		console.log(data);

		return data;
	}


	ctrl.addDeposit = function(){
		var data = generateSampleDeposit();
		data = reCalculate(data);
		$scope.deposits.push(data);

		$scope.references.push({"ref":data.ref,"title":data.ref + " - Original Maturity"});
		$scope.references.push({"ref":data.ref,"title":data.ref + " - Inflation Adjusted Maturity"});

	}

	ctrl.calculate = function(data){
		reCalculate(data);
	}

});


deposistsCalculator.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);
 

deposistsCalculator.filter('rupees', ['$filter', function ($filter) {
  return function (input, decimals) {
    return "\u20B9" + $filter('number')(input, decimals);
  };
}]);
 

deposistsCalculator.filter('humanDate', ['$filter', function ($filter) {
  return function (input) {
  	var d = humanDate(input);
  	
  	var yrs = d.years + ((d.years > 1) ? " years" : " year");
  	var mths = d.months  + ((d.months > 1) ? " months" : " month");

  	return yrs + " " + mths;

  };
}]);
 