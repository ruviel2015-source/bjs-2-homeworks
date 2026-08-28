function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;

	if (d > 0) {
		const root1 = (-b + Math.sqrt(d)) / (2 * a);
		const root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	} else if (d === 0) {
		const root = -b / (2 * a);
		arr.push(root);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (contribution >= amount) {
		return 0;
	}

	const creditBody = amount - contribution;
	const monthlyPercent = (percent / 100) / 12;
	const monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	const totalAmount = (monthlyPayment * countMonths) + contribution;

	return Number(totalAmount.toFixed(2));
  
}