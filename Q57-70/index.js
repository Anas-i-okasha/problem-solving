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



console.log(calculateSacrificeProfit([100], [150])); // 50 profit
console.log(calculateSacrificeProfit([100, 200], [150, 230])); // 80 profit
console.log(calculateSacrificeProfit([100, 150, 200], [100, 150, 200])); // 0 profit

//------------------------------------------------------------------------------------------------------------

/*** Q58
 * Ramadan fasting hours: calculate total fasting hours in ramadan month
 */

function calculateRamadanFastingHours(startTimes, endTimes) {
    // validation
    if (!startTimes.length || !endTimes.length)
        throw new Error('no time period provided!!');

    let totalFastingHours = 0, totalFastingMinutes =0;

    for (let i=0; i < startTimes.length; i++) {
        const [startHours, startMinutes] = startTimes[i].split(':');
        const [endHours, endMinutes] = endTimes[i].split(':');
        totalFastingHours += (+endHours) - (+startHours);
        totalFastingMinutes += (+endMinutes) - (+startMinutes)
    }
    return totalFastingHours + totalFastingMinutes / 60;
}

console.log(calculateRamadanFastingHours(['04:30', '05:00'], ['18:30', '18:00'])) // 27
console.log(calculateRamadanFastingHours(['04:45'], ['18:15'])) // 13.5

/************************************************************************************ ***********************/
/** Q59
 * Given an array of bird sightings where every element represents a bird type id, 
 * determine the id of the most frequently sighted type. 
 * If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
 */

function getBirdsTypeMostFrequently(arr) {
    if (!Array.isArray(arr))
        arr = [arr];

    let result = {};
    let count = 0;
    let mostBirdFrequently = null;

    for (const id of arr) {
        result[id] = (result[id] || 0) + 1;

       if (result[id] > count || (result[id] === count && (mostBirdFrequently === null || id < mostBirdFrequently))) {
            count = result[id];
            mostBirdFrequently = id;
        }
    }

    return mostBirdFrequently;
}

console.log(getBirdsTypeMostFrequently([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));