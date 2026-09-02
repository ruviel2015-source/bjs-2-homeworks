"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let S = amount - contribution;

	if (S <= 0) {
		return 0;
	}

	let P = (percent / 100) / 12;
	let monthlyPayment = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}