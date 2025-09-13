console.log('problem solving -- Q57-70');

/**Q57:: Profits of the sacrifice seller*****:: 
 * On Eid al-Adha, the sacrifice seller buys sheep and goats at different prices, 
 * then sells them to the people of the neighborhood at a higher price.The seller wants to know his total profit from these operations
 */

function calculateSacrificeProfit (buyPrices, sellPrices) {
    // validation
    if (!buyPrices.length || !sellPrices.length)
        return 0;

    let totalProfit = 0;

    for (let i=0; i < buyPrices.length; i++) {
        if (!sheepSellPrice)
            continue;

        totalProfit += sellPrices[i] - buyPrices[i];
    }

    return totalProfit;
}



console.log(calculateSacrificeProfit([100], [150])); // 50
console.log(calculateSacrificeProfit([100, 200], [150, 230])); // 80
console.log(calculateSacrificeProfit([100, 150, 200], [100, 150, 200])); // 0