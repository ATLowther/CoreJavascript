function larger(x, y)
{
	if (x > y) 
		return x;
	return y;
}

function average(x, y)
{
	return (x + y) / 2;
}

function averageLst(x)
{
	var total = 0;
	var count = 0;
	for (var i = 0; i < x.length; i++)
	{
		total += x[i];
		count++;
	}

	return total / count;
}

function randNum(x, y)
{
	if (x > y) 
		return Math.floor(Math.random() * (x - y) + y);
	return Math.floor(Math.random() * (y - x) + x);
}

function median (x)
{
	if (x[0] > x[1])
		if (x[1] > x[2])
			return x[1];
		else if (x[0] > x[2])
			return x[0];
	return x[2];
}

function numberOfZeroes(x)
{
	var total = 0;
	for (var i = 0; i < x.length; i++)
	{
		if (x[i] === 0)
			total++;
	}
	return total;
}

function cntOccurrences(x, y)
{
	var count = 0;	
	for(var i = 0; i < x.length; i++)
	{
		if (x.charAt(i).toLowerCase() === y) 
			count++;
	}
	return count;
}

function isPrime(x)
{
	var z = [];
	for (var i = 0; i < x.length; i++) 
	{
		if (x[i] <= 1)
			continue;		
		else if ((x[i] == 2) || (x[i] == 3) || (x[i] == 5))		
		{
			z.push(x[i]);
			continue;
		}	
		else if ((x[i] % 2 == 0) || (x[i] % 3 ==0))
			continue;
		else if (x[i] % 10 == 5) 
			continue;	
		var y = 5.0;
		while ((y * y) <= i) 
		{			
			if ((x[i] % y == 0) || (x[i] % (y + 2) == 0)) 
				continue;			
			y += 6;
		}
		z.push(x[i])
	}
	return z;	
}

console.log("The result of calling larger with the values 15, 100 is " + larger(15, 100));
console.log("The result of calling average with the values 80, 50 is " + average(80, 50));
console.log("The result of calling averageLst with the values 75, 60, 100, 90 is " + averageLst([75, 60, 100, 90]));
console.log("The result of calling randNum with the values 10, 20 is " + randNum(10, 20));
console.log("The result of calling median with the values -10, 25, 0 is " + median([-10, 25, 0]));
console.log("The result of calling numberOfZeroes with the values 10, 0, 0, 0, false, true, 0, 0 is " + numberOfZeroes([10, 0, 0, 0, false, true, 0, 0]));
console.log("The result of calling cntOccurrences with the values 'Adrian Tillman was here', 'a' is " + cntOccurrences("Adrian Tillman was here", "a"));
console.log("The result of calling isPrime with the values 1, 2, 3, 5, 7, 10, 12, 13, 15, 20 is " + isPrime([1, 2, 3, 5, 7, 10, 12, 13, 15, 20]));