/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */
const passengerName: string = "Fajar Nugroho";
const hasCheckedInOnline: boolean = true;
const cabinClass: string = "Economy";
const baggageWeight: number = 24;
const baggageLimit: number = 20;
let message: string;

const isBusinessClass: boolean = cabinClass === "Business";

if (!hasCheckedInOnline) {
    message = "Please complete online check-in first.";
} else if (baggageWeight > baggageLimit) {
    if (isBusinessClass) {
        message = "Extra baggage allowed for Business Class.";
    } else {
        message = "Additional baggage fee required.";
    }
} else {
    message = "Proceed to boarding pass printing.";
}

console.log(`Passenger: ${passengerName}`);
console.log(`Message: ${message}`);