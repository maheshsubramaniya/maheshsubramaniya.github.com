
function humanTime(months){
	if(months < 12){
		return {"years":0,"months":months};
	} else{
		return {"years":Math.floor(months/12),"months":months % 12};
	}
}

function CAGR(startingAmount,finalAmount,months){
	var years = months/12;
	var cagr = Math.pow((finalAmount/startingAmount),(1/years))-1
	return cagr;
}

function fixedDeposit(amount,months,rate){
	var rate_per_quarter = rate / 400.0;
	var quarters = months/3;

	var totalInvestment = amount;
	var finalAmount = amount * Math.pow(1+rate_per_quarter,quarters);
	var totalInterest = finalAmount - totalInvestment;

	var effectiveReturns = CAGR(totalInvestment,finalAmount,months);

	return {"totalInvestment":totalInvestment,"totalInterest":totalInterest,"finalAmount":finalAmount, "effectiveReturns":effectiveReturns };
}

function recurringDeposit(monthlyAmount,months,rate){

	var rate_per_quarter = rate / 400.0;
	var quarters = months/3;

	var a = Math.pow(1+rate_per_quarter,quarters);
	var b = Math.pow(1+rate_per_quarter,-1/3);

	var multiplyingFactor = ((a-1)/(1-b)) || 0;
	var totalInvestment = monthlyAmount * months;

	var finalAmount = totalInvestment;
	if(multiplyingFactor != 0){
		finalAmount = monthlyAmount * multiplyingFactor;
	}

	var totalInterest = finalAmount - totalInvestment;

	var effectiveReturns = CAGR(totalInvestment,finalAmount,months);

	return {"totalInvestment":totalInvestment,"totalInterest":totalInterest,"finalAmount":finalAmount, "effectiveReturns":effectiveReturns };
}

function calculateRecurringAmountForTarget(targetAmount,months,rate){
	
	var rate_per_quarter = rate / 400.0;
	var quarters = months/3;

	var a = Math.pow(1+rate_per_quarter,quarters)-1;
	var b = 1-Math.pow(1+rate_per_quarter,-1/3);

	var monthlyRecurringAmount = targetAmount * b / a;
	return {"monthlyRecurringAmount":monthlyRecurringAmount};
}

function setupSimpleRecurring () {
	var element = $("#simpleRecurring").get(0);

	var tangle = new Tangle(element, {
		initialize: function () {
			this.monthlyRecurringAmount = 100.0;
			this.months = 12;
			this.rate = 8.0;
			this.inflationRate = 3.0;
		},
		update: function () {

			//deposit calculation
			var recurringResult = recurringDeposit(this.monthlyRecurringAmount,this.months,this.rate);
			this.finalAmount = recurringResult.finalAmount;
			this.totalInterest = recurringResult.totalInterest;
			this.totalInvestment = recurringResult.totalInvestment;
			
			//inflation adjustment
			var recurringResultInflation = recurringDeposit(this.monthlyRecurringAmount,this.months,this.inflationRate);
			//InflationAdjust = Maturity - Interest lost in Inflation
			this.finalAmountInflationAdjusted = recurringResult.finalAmount-recurringResultInflation.totalInterest;
			this.inflationAmount = recurringResultInflation.finalAmount;
			
			//loss calculation
			this.lossDueToInflation = this.finalAmount - this.finalAmountInflationAdjusted || 0;
			this.lossDueToInflationPercent = (this.finalAmount - this.finalAmountInflationAdjusted)/this.finalAmount*100 || 0;


			//effective returns
			this.effectiveReturns = recurringResult.effectiveReturns*100;
			var inflationCAGR = CAGR(this.totalInvestment,this.finalAmountInflationAdjusted,this.months)*100;
			this.effectiveReturnsAfterInflation =  inflationCAGR|| 0;



			//formatting
			var ht = humanTime(this.months);
			this.humanMonths = ht.months;
			this.humanYears = ht.years;
			
		}
	});
}

function setupFixedDeposit() {
	var element = $("#fixedDeposit").get(0);

	var tangle = new Tangle(element, {
		initialize: function () {
			this.investmentAmount = 100000.0;
			this.months = 12;
			this.rate = 8.0;
			this.inflationRate = 3.0;
		},
		update: function () {

			//deposit calculation
			var recurringResult = fixedDeposit(this.investmentAmount,this.months,this.rate);
			this.finalAmount = recurringResult.finalAmount;
			this.totalInterest = recurringResult.totalInterest;
			this.totalInvestment = recurringResult.totalInvestment;
			
			//inflation adjustment
			var recurringResultInflation = fixedDeposit(this.investmentAmount,this.months,this.inflationRate);
			//InflationAdjust = Maturity - Interest lost in Inflation
			this.finalAmountInflationAdjusted = recurringResult.finalAmount-recurringResultInflation.totalInterest;
			this.inflationAmount = recurringResultInflation.finalAmount;
			
			//loss calculation
			this.lossDueToInflation = this.finalAmount - this.finalAmountInflationAdjusted || 0;
			this.lossDueToInflationPercent = (this.finalAmount - this.finalAmountInflationAdjusted)/this.finalAmount*100 || 0;


			//effective returns
			this.effectiveReturns = recurringResult.effectiveReturns*100;
			var inflationCAGR = CAGR(this.totalInvestment,this.finalAmountInflationAdjusted,this.months)*100;
			this.effectiveReturnsAfterInflation =  inflationCAGR|| 0;



			//formatting
			var ht = humanTime(this.months);
			this.humanMonths = ht.months;
			this.humanYears = ht.years;
			
		}
	});
}

function setupRecurringForTargetAmount() {
	var element = $("#recurringForTarget").get(0);

	var tangle = new Tangle(element, {
		initialize: function () {
			this.finalAmount = 100000.0;
			this.months = 12;
			this.rate = 8.0;
		},
		update: function () {

			var recurringResult = calculateRecurringAmountForTarget(this.finalAmount,this.months,this.rate);

			this.monthlyRecurringAmount = recurringResult.monthlyRecurringAmount;

			//formatting
			var ht = humanTime(this.months);
			this.humanMonths = ht.months;
			this.humanYears = ht.years;

		}
	});
}
