function getAverage(marks){
    let studAverage = (marks.reduce((a,b)=> a+b))/marks.length
    return Math.floor(studAverage);
  }