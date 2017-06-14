function displayWelcome()
{
	console.log('This program will determine the time to pay off a credit card and the interest paid based on the current balance,');
	console.log('the Interest rate, and the monthly payments made');
	console.log('The balance on your credit card: ' + balance);
	console.log('Interest Rate: ' + (interestRate * 100));
	console.log('Assuming a minimum payment of 2% of the balance ($20 min)');
	console.log('Your minimum payment would be $ ' + minimumPayment);
}

var balance = 1500;
var interestRate = .18;

function calculateMinimumPayment(balance, interestRate)
{
	return ((balance * .02) > 20) ? balance * .02 : 20; 
}

var minimumPayment = calculateMinimumPayment(balance, interestRate);

function displayPayments(balance, interestRate, minimumPayment)
{
	var totalInterest = 0;
	var totalPayments = 0;
	console.log('PAYOFF SCHEDULE');
	console.log('________________');
	console.log('Year\tBalance\tPayment Num\tInterest Paid')
	var i = 1;
	fullSchedule : while(balance >= 0) 
	{
		for (var j = 1; j <= 12 && balance >= 0; j++) 
		{			
				var interestAccrued = balance * (interestRate / 12);
				totalInterest += interestAccrued;
				balance += interestAccrued - minimumPayment;
				if (balance <= 0) 
				{
					totalPayments++;
				if (j === 1) 
					console.log(i + "\t" +  0.00.toFixed(2) + "\t" + totalPayments + "\t\t" + totalInterest.toFixed(2)); 				
				else				
					console.log("\t" +  0.00.toFixed(2) + "\t" + totalPayments + "\t\t" + totalInterest.toFixed(2)); 
				break fullSchedule;
				}
				totalPayments++;
				if (j === 1) 
					console.log(i + "\t" +  balance.toFixed(2) + "\t" + totalPayments + "\t\t" + totalInterest.toFixed(2)); 				
				else				
					console.log("\t" +  balance.toFixed(2) + "\t" + totalPayments + "\t\t" + totalInterest.toFixed(2)); 
				
				
		}
		i++;
	}
}


displayWelcome();
console.log(displayPayments(balance, interestRate, minimumPayment));