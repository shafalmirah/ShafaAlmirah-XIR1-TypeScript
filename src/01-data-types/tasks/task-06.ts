/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
const product1: {productCode: string, productName: string, sellingPrice: number, stockQuantity: number, productWeight: number, averageCustomerRating: number, isDiscounted: boolean} =
    {productCode: "GJDG001",
    productName: "portable fan",
    sellingPrice: 160000,
    stockQuantity: 50,
    productWeight: 0.06,
    averageCustomerRating: 4.5,
    isDiscounted: true};

const product2: {productCode: string, productName: string, sellingPrice: number, stockQuantity: number, productWeight: number, averageCustomerRating: number, isDiscounted: boolean} =
    {productCode: "GJDG002",
    productName: "portable speaker",
    sellingPrice: 250000,
    stockQuantity: 30,
    productWeight: 0.5,
    averageCustomerRating: 4.7,
    isDiscounted: false};

const product3: {productCode: string, productName: string, sellingPrice: number, stockQuantity: number, productWeight: number, averageCustomerRating: number, isDiscounted: boolean} =
    {productCode: "GJDG003",
    productName: "wireless mouse",
    sellingPrice: 120000,
    stockQuantity: 100,
    productWeight: 0.1,
    averageCustomerRating: 4.3,
    isDiscounted: true};

console.log("==Product Data==");
console.log({product1}, {product2}, {product3});