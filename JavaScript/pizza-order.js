const pizzaCost = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
};

const extraCost = {
    ExtraSauce: 1,
    ExtraToppings: 2,
};

function calculateExtrasCost(extras=[], sum = 0) {
    if(extras.length === 0) {
        return sum;
    }

    sum = sum + extraCost[extras[0]];
    extras = extras.slice(1);

    return calculateExtrasCost(extras, sum);
}

function pizzaPrice(pizza, ...extras) {
    if(extras.length === 0) {
        return pizzaCost[pizza];
    }

    return pizzaCost[pizza] + calculateExtrasCost(extras);
}

function orderPrice(pizzaOrders) {
    return pizzaOrders.reduce((sum, pizza) => sum += pizzaPrice(pizza.pizza, ...pizza.extras), 0);
}


// Pizzas
let margherita = { pizza: 'Margherita', extras: [] } 
let caprese = { pizza: 'Caprese', extras: ['ExtraToppings'] }

console.log(margherita, pizzaPrice(margherita.pizza, ...margherita.extras));
console.log(caprese, pizzaPrice(caprese.pizza, ...caprese.extras));

// Orders
let order1 = [margherita, caprese];
let order2 = [caprese, margherita];

console.log(order1, orderPrice(order1));
console.log(order2, orderPrice(order2));