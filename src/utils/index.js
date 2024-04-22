/**
 * This function calculetes total price of a new order
 * @param {Array} products cartProducts: Array of objetcs
 * @returns {number} Total Price
 */

export const totalPrice = (products) =>{
    let sum=0
    products.forEach(product => sum += product.price)
    return sum
}