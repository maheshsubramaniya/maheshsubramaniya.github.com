// create the module and name it goldApp
var goldApp = angular.module('goldApp', []).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});



// create the controller and inject Angular's $scope
goldApp.controller('gController', function($scope) {


	/*
		1 - Profit > 10%
		-1 - Loss
		0 - Marginal / No Profit
	*/
	var LOSS = "Loss", PROFIT = "Profit", MARGINAL_OR_NO_PROFIT = "Marginal Profit";

	var ctrl = this;

	$scope.usdToInr = 63.00;
	$scope.ozToGram = 31.10;
	$scope.goldPriceOutsideIndiaPerOunceInUSD = 1200.00;
	$scope.goldPriceIndia24ctPerGramInINR = 2600.0;
	$scope.goldPriceIndia22ctPerGramInINR = 2434.00;
	$scope.customsDutyPer10Grams = 750;

	$scope.profitOrLossBuyingOutsideIndiaInINR = 0.0;
	$scope.profitOrLossPercentBuyingOutsideIndia = 0.0;
	$scope.profitOrLoss = MARGINAL_OR_NO_PROFIT;

	//as jewellery
	$scope.valueAddition = 10;
	$scope.valueAddedTax = 1;
	$scope.goldValue22ctAsJewel = 0.0;
	$scope.profitOrLossAsJewellery = MARGINAL_OR_NO_PROFIT;
	$scope.profitOrLossPercentBuyingOutsideIndiaAsJewellery = 0;
	$scope.profitOrLossBuyingOutsideIndiaAsJewelleryInINR = 0;



	function priceOfGoldPerGram(amount,grams){
		return amount / grams;
	}

	function convertUSDtoINR(usd,exchangeRate){

		return usd * exchangeRate;
	}

	function sum(){
		var sum = 0;
		for(var i =0; i < arguments.length; i++){
			var _x = Number.parseFloat(arguments[i]);

			if( !Number.isNaN(_x) ){
				sum += _x;
			}
		}

		return sum;
	}

	function isProfitOrLoss(value,compareTo){
		if(value < 0 ){
			return LOSS;
		} else if ( value >=0 && value <= compareTo * (4/100) ){
			return MARGINAL_OR_NO_PROFIT;
		} else {
			return PROFIT;
		}
	}

	function isProfitOrLossPercent(value,compareTo){
		return (value/compareTo) ;
	}

	ctrl.computeProfitOrLossForCoin = function(){
		// USD(1) -> Au(.000881197)
		// USD(1) -> INR (63)
		// INR(1) -> USD (1/63) -> Au(.000881197*1/63)
		// $scope.goldPriceOutsideIndiaPerOunceInUSD = $scope.goldPriceOutsideIndiaPerOunceInUSD + (.000881197 * 1/$scope.usdToInr) ;

		var value_of_final_converstion = profitOfBuyingForeignGold();

		$scope.profitOrLossBuyingOutsideIndiaInINR = value_of_final_converstion;
		$scope.profitOrLossPercentBuyingOutsideIndia = isProfitOrLossPercent(value_of_final_converstion,$scope.goldPriceIndia22ctPerGramInINR);
		$scope.profitOrLoss = isProfitOrLoss(value_of_final_converstion,$scope.goldPriceIndia22ctPerGramInINR)

		//for jewellery
		var gold_value_22ct_as_jewel = ( $scope.goldPriceIndia22ctPerGramInINR * (1+$scope.valueAddition/100.0) * (1+$scope.valueAddedTax/100.0)  );

		$scope.goldValue22ctAsJewel = gold_value_22ct_as_jewel;
		$scope.goldValue22ctAsJewelOutsideIndia = gold_value_22ct_as_jewel-value_of_final_converstion;

		$scope.profitOrLossBuyingOutsideIndiaAsJewelleryInINR =  isProfitOrLossPercent(gold_value_22ct_as_jewel,$scope.goldPriceIndia22ctPerGramInINR)


	}

	function costOfForeignGoldInIndia(){
		var us_gold_1gm_usd = priceOfGoldPerGram($scope.goldPriceOutsideIndiaPerOunceInUSD,$scope.ozToGram);
		var us_gold_1gm_inr = convertUSDtoINR(us_gold_1gm_usd,$scope.usdToInr)-$scope.customsDutyPer10Grams/10.0;

		return us_gold_1gm_inr;

	}

	function profitOfBuyingForeignGold(){

		// +ve value is Profit in buying in US market rate and converting to Indian market rate
		// -ve value is Loss in buying in US market rate and converting to Indian market rate

		var foreign_to_india_24ct_profit = $scope.goldPriceIndia24ctPerGramInINR - costOfForeignGoldInIndia();

		var total_profit = foreign_to_india_24ct_profit;
		var net_profit = total_profit;

		return net_profit;
	}


	function calculate22CtGramsFromForeignGold(){
		var gold_22ct_from_24ct = $scope.goldPriceIndia24ctPerGramInINR / $scope.goldPriceIndia22ctPerGramInINR; 
		var gold_22ct_from_profit = profitOfBuyingForeignGold() / $scope.goldPriceIndia22ctPerGramInINR; 

		return gold_22ct_from_24ct + gold_22ct_from_profit;
	}

	function get22ctPriceEquivalentOfForeignGoldInIndia(){
		return ($scope.goldPriceIndia22ctPerGramInINR + profitOfBuyingForeignGold())
	}


	ctrl.getIndianEquivalentof22CtInGrams = function(){
		return calculate22CtGramsFromForeignGold();

	}

	function get22CtJewelPriceInIndiaAfterCharges(){
		return $scope.goldPriceIndia22ctPerGramInINR * (1+$scope.valueAddition/100.0) * (1+$scope.valueAddedTax/100.0);
	}


	ctrl.getIndianEquivalentof22CtPerGramAsJewels = function(){
		return get22ctPriceEquivalentOfForeignGoldInIndia()/get22CtJewelPriceInIndiaAfterCharges();
	}

});



goldApp.filter('soverign', ['$filter', function ($filter) {

	function sov(grams){
		var sov = Math.floor(grams/8);
		var gms = Math.round((grams - sov * 8)*100,2)/100;

		if(gms == 8){
			 sov = sov + 1;
			 gms = 0;
		}

		return { sov: sov, gms:gms };
	}

  return function (input) {
  	var d = sov(input);
  	return d.sov + " sov " + d.gms + " grams ";
  };
}]);
 

goldApp.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);
 

goldApp.filter('rupees', ['$filter', function ($filter) {
  return function (input, decimals) {
    return "\u20B9" + $filter('number')(input, decimals);
  };
}]);
