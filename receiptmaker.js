const dishes = [
    {name: "Italian pasta", price: 9.55},
    {name: "Rice with veggies", price: 8.65},
    {name: "Chicken with potatoes", price: 15.55},
    {name: "Vegetarian Pizza", price: 6.45}

    
];

//fuction declaration to display dish prices based on the withtax parameter
function displayDishPrices(withTax){
    if(withTax){
        //check if the arguement is true for prices with tax
        console.log("Prices with 20% tax:");//output header for prices with tax
        //loop through each dish in the dishes array
        dishes.forEach(dish => {
            //calculate the final price including 20% tax
            const finalPrice = (dish.price * 1.2).toFixed(2);//multiply by 1.2 and format to 2 decimal places
            //log the dish name and calculate price to the console
            console.log(`Dish: ${dish.name} Price (incl.tax): $ ${finalPrice}`);

        });

    }else{
        console.log("Prices without tax:");//output header for prices without tax
        //loop through each dish in the dishes array
        dishes.forEach(dish => {
            //log the dish name and original price(formatted to 2 decimal places)
            console.log(`Dish: ${dish.name} Price (incl.tax): $ ${dish.price.toFixed(2)}`);

        });
    }
}

displayDishPrices(true); // call the function with true to show prices with tax
displayDishPrices(false); // call the function with false to show prices without tax