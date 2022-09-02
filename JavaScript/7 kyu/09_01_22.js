function highAndLow(numbers){
    let arr = numbers.split(' ');
    return `${Math.max(...arr)} ${Math.min(...arr)}`
  }