/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: project02-04.js
 */
 
   const CHICKEN_PRICE = 10.95
   const HALIBUT_PRICE = 13.95
   const BURGER_PRICE = 9.95
   const SALMON_PRICE = 18.95
   const SALAD_PRICE = 7.95
   const SALES_TAX = 0.07


   document.getElementById("chicken").addEventListener("click", calcTotal)
   document.getElementById("halibut").addEventListener("click", calcTotal)
   document.getElementById("burger").addEventListener("click", calcTotal)
   document.getElementById("salmon").addEventListener("click", calcTotal)
   document.getElementById("salad").addEventListener("click", calcTotal)

function calcTotal(){

   let cost = 0;

   buyChicken = document.getElementById("chicken").checked;
   buyHalibut = document.getElementById("halibut").checked;
   buyBurger = document.getElementById("burger").checked;
   buySalmon = document.getElementById("salmon").checked;
   buySalad = document.getElementById("salad").checked;


   CHICKEN_PRICE = buyChicken ? CHICKEN_PRICE : 0;
   HALIBUT_PRICE = buyHalibut ? HALIBUT_PRICE : 0;
   BURGER_PRICE = buyBurger ? BURGER_PRICE : 0;
   SALMON_PRICE = buySalmon ? SALMON_PRICE : 0;
   SALAD_PRICE = buySalad ? SALAD_PRICE : 0;


   totalCost = cost + tax;


}



// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
    

      
 }
