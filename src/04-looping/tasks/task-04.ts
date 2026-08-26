/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [
	125000,
	350000,
	78000,
	910000,
	150000,
	420000,
	275000,
	99000,
	640000,
	18000,
];

let totalSales: number = 0;
let highestTransaction: number = sales[0];
let lowestTransaction: number = sales[0];
let transactionsAtLeast300000: number = 0;

for (const sale of sales) {
	totalSales += sale;

	if (sale > highestTransaction) {
		highestTransaction = sale;
	}

	if (sale < lowestTransaction) {
		lowestTransaction = sale;
	}

	if (sale >= 300000) {
		transactionsAtLeast300000++;
	}
}

const averageTransaction: number = totalSales / sales.length;

console.log(`Total sales revenue: Rp${totalSales}`);
console.log(`Highest transaction: Rp${highestTransaction}`);
console.log(`Lowest transaction: Rp${lowestTransaction}`);
console.log(
	`Transactions worth Rp300,000 or more: ${transactionsAtLeast300000}`,
);
console.log(`Average transaction value: Rp${averageTransaction}`);