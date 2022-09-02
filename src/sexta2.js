const cards = require('./cards.js');

function getPkmRegex(cards, regex) {
    return cards.filter((card) => card.name.match(regex) && regex.test(card.name));
}

function orderByHp(cards) {
    return cards.sort((a, b) => a.hp - b.hp);
}

function createMyObject(cards) {
    // const obj = {
    //     id: '',
    //     name: '',
    //     hp: '',
    // }
    const obj = cards.reduce((acc, card) => {
      acc.push({
        id: card.id,
        name: card.name,
        hp: card.hp,
      })
        return acc;
    }, []);
    return obj;
}

function createWithMap(cards) {
    const obj = cards.map((card) => {
        return {
            id: card.id,
            name: card.name,
            hp: card.hp,
        }
    })
    return obj;
}

function createWithForEach(cards) {
    const obj = [];
    cards.forEach(card => {
        obj.push({
            id: card.id,
            name: card.name,
            hp: card.hp,
        })
    })
    return obj;
}

function createWithAttacks(cards) {
    const obj = [];
    cards.forEach(card => {
        obj.push({
            id: card.id,
            name: card.name,
            hp: card.hp,
            attacks: card.attacks,
        })
    })
    return obj;
}

function createDefault(cards, ...keys) {
    const arr = [];
    cards.forEach(card => {
        arr.push({
            id: card.id,
            name: card.name,
            [keys[1]]: card.level,
            hp: card.hp,
            [keys[0]]: card.attacks,
        })
    })
    arr.forEach((item) => {
        Object.keys(item).forEach((key) => {
            if(key === 'undefined'){
               delete item[key]; 
        }
    })
})
    return arr;
}

function getFilters(options, cards){
    if(options.sorted){
        cards = orderByHp(cards);
    }
    if(options.attacks && !options.level){
        return createDefault(cards, 'attacks');
    }
    if(options.level){
        return createDefault(cards, 'attacks', 'level')
    }
    return createDefault(cards);
}
const filteredByRegex = getPkmRegex(cards, /chari/i);
console.log(getFilters({sorted: true, attacks: false, level: true}, filteredByRegex))
// const orderedByHp = orderByHp(filteredByRegex);
// console.log(createWithForEach(orderedByHp));
