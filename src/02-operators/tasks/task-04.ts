/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
const keyboardPrice: number = 850000;
const keyboardQuantity: number = 1;
const mousePrice: number = 275000;
const mouseQuantity: number = 2;
const mousepadPrice: number = 120000;
const mousepadQuantity: number = 1;

const isPremiumMember: boolean = true;
const subtotal =
    (keyboardPrice * keyboardQuantity) +
    (mousePrice * mouseQuantity) +
    (mousepadPrice * mousepadQuantity);

let totalItems: number = 0;




