function howMuchILoveYou(aMillion) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * aMillion.length);
    // get random item
    const item = aMillion[randomIndex];

    return item;
}

const aMillion = ['I love you','a little','a lot','passionately','madly','not at all'];

const result = howMuchILoveYou(aMillion);
console.log(result);