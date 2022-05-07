function dontGiveMeFive(start, end){
    //count the numbers from start to end, if the number has a 5 omit it
    //iterate through and if %5!=0 
    //return count
    let count = 0;
    
    for (let i = start; i <= end; ++i)
      if (!i.toString().includes("5"))
          count++;
    
      return count;
    }