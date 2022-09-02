const cards = require('./cards.js');

function getAllNamesWithReduce(cards){
    const result = cards.reduce((acc, card) => {
        acc.push(card.name);
        return acc;
    }, []);
    return result;
}

function getAllNames(cards) {
    return cards.map((card) => card.name);
}

function getNameAndAttacksWithReduce({ attacks }, key) {
  const obj = attacks.reduce((acc, curr) => {
    acc[curr.name] = curr[key];
    return acc;
  }, {});
  return obj;
}

function getNameAndAttacks({ attacks, set: { name } }, key) {
    const obj = {}
    attacks.forEach(attack => {
        obj[attack.name] = attack[key];
    });
    return obj;
}

function getAttacksFromEspecifiedPkm(cards, pkm){
    const obj = {};
    cards.forEach(card => {
        if(card.name === pkm){
            obj[card.name] = card.attacks;
        }
    });
    return obj;
}

function getAttacksFromEspecifiedPkmWithReduce(cards, pkm){
    const acc = {};
    const obj = cards.reduce((acc, curr) => {
        if(curr.name === pkm){
            acc[curr.name] = curr.attacks;
        }
        return acc;
    }, {});
    return obj;
}

function getMostPrintedCard(cards){
    let printedNumber = getMostPrintedCardWithForEach(cards)
    const obj = cards.reduce((acc, curr) => {
        if(printedNumber === curr.set.printedTotal){
            acc[curr.name] = curr;
        }
    }, {});
    return obj;
}

function getMostPrintedCardWithForEach(cards){
    let mostPrinted = 0;
    cards.forEach(card => {
        if(card.set.printedTotal > mostPrinted){
            mostPrinted = card.set.printedTotal;
        }
    });
  return mostPrinted
}

function getMostPrinted(cards){
    let printedNumber = getMostPrintedCardWithForEach(cards)
    let mostPrinted = {}
    cards.forEach(card => {
        if(card.set.printedTotal === printedNumber){
            mostPrinted[card.name] = card;
        }
    });
    return mostPrinted;
}

function getMostPrintedCardWithMap(cards){
    const mostPrinted = cards.map(card => card.set.printedTotal);
    return Math.max(...mostPrinted);
}

console.log(getMostPrintedCard(cards))
// console.log(getMostPrinted(cards))
// console.log(getMostPrintedCardWithMap(cards))
// console.log(getAttacksFromEspecifiedPkmWithReduce(cards, 'Charizard'));
// console.log(getNameAndAttacksWithReduce(cards[0], 'text'));
// console.log(getAllNames(cards));