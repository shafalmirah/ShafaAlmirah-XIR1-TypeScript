/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
const ratePerHour: number = 8000;
const totalTimeInMinutes: number = 7 * 60 + 35;
const remainingMinutes: number = totalTimeInMinutes % 60;
const totalBilledHours: number = Math.ceil(totalTimeInMinutes / 60);
const totalPaymentBeforeDiscount: number = totalBilledHours * ratePerHour;
const discount: number = totalBilledHours > 5 ? totalPaymentBeforeDiscount * 0.15 : 0;
const finalPayment: number = totalPaymentBeforeDiscount - discount;
console.log("==Internet Cafe Billing==");
console.log(`Total Playing Time: ${totalTimeInMinutes} minutes`);
console.log(`Remaining Minutes: ${remainingMinutes} minutes`);
console.log(`Total Billed Hours: ${totalBilledHours} hours`);
console.log(`Total Payment Before Discount: Rp${totalPaymentBeforeDiscount.toLocaleString()}`);
console.log(`Discount Amount: Rp${discount.toLocaleString()}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString()}`);   