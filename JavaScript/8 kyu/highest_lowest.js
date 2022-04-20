// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    //turn the string into an array of numbers
    //split the array of numbers 
    //single out the lowest and highest number
    //return them 
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }