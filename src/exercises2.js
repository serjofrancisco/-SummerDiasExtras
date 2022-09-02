const cards = require('./cards.js');

function getNameAndAttacks({ attacks, set: { name } }, key) {
    const obj = {}
    attacks.forEach(attack => {
        obj[attack.name] = attack[key];
    })
    console.log(name)
    return obj;
}

function getAllNames(cards) {
    return cards.map((card) => card.name);
}

function getPkm(cards, name) {
    return cards.find((card) => card.name === name);
}

function getPkmRegex(cards, regex) {
    return cards.filter((card) => card.name.match(regex) && regex.test(card.name));
}

function getPkmByNames(cards, ...names) {
    return cards.filter((card) => names.includes(card.name));
}

function getHowManyCardsPrinted(cards) {
    return cards.reduce((acc, card) => acc + card.set.printedTotal, 0);
}

// console.log(getHowManyCardsPrinted(cards))

function getHowManyCardsPrintedForEach(cards) {
    let total = 0
    cards.forEach(card => {
        total += card.set.printedTotal;
    })
    return total;
}

// console.log(getHowManyCardsPrintedForEach(cards))

const newobj = {
    'Dragonite δ': [
        { type: 'Grass', value: '-30' },
        { type: 'Fighting', value: '-30' }
    ],
    'Drifblim FB': [{ type: 'Colorless', value: '-20' }, { type: 'Colorless', value: '-20' }],
    Butterfree: [{ type: 'Fighting', value: '-20' }, { type: 'Colorless', value: '-20' }],
    Ditto: [{ type: 'Psychic', value: '-30' }],
    "Blaine's Charizard": [{ type: 'Fighting', value: '-30' }],
}
function getResistances(cards) {
    const obj = {};
    cards.forEach(card => {
        if (card.resistances) {
            obj[card.name] = card.resistances;
        }
    })
    return obj;
}

function getBiggestLength(cards) {
    let maiorLength = Object.values(cards)[0].length;
    Object.values(cards).forEach((resistance) => {
        if (resistance.length >= maiorLength) {
            maiorLength = resistance.length;
        }
    })
    return maiorLength
}

function getStrongestPkm(cards, lenght) {
    const obj = {}
    Object.values(cards).forEach((element, index) => {
        if(element.length === lenght){
            obj[Object.keys(cards)[index]] = element;
        }
    })
    return obj
}
const length = getBiggestLength(newobj)
// console.log(getStrongestPkm(newobj, length))
// getResistances(cards);
// console.log(getHowManyCardsPrinted(cards))
// console.log(getPkmByNames(cards, 'Charizard', 'Pikachu'));
console.log(getPkmRegex(cards, /.*Chari.*/));
//  console.log(getPkm(cards, 'Charizard'));
// console.log(getAllNames(cards));
// console.log(getNameAndAttacks(cards[0], 'text'));