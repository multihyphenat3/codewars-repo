    //Created a function that iterates through an array of sheep and with each new sheep added it will progress forward ex. 1 sheep .. 2 sheep
let countSheep = function (num){
    //Below is the array that the sheep will be passed through
    let arrOfSheep = []
    //Below is the for loop that allows for the iteration process
    for (let i = 1; i <= num; i++){
    let sheepCount = `${i} sheep...`
    arrOfSheep.push(sheepCount);
    //Below returns and joins each sheep added to the previous array
    }
    return arrOfSheep.join('')
  }