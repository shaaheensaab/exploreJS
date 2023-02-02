/* Imagine: You want to make some furniture for your home, now calculate how much wood do you need for these.

#fixed: per item required wood.
1. chair ===> 3 cft.
2. table ===> 6 cft.
3. bed ===> 10 cft.

#vary: quantity.
*/
const perChairWood = 3;
const perTableWood = 6;
const perBedWood = 10;

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const needTotalWood = woodCalculator(0, 0, 1);
console.log("Total wood need:", needTotalWood, "cft");