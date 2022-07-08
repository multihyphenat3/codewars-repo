function solution(a, b){
    if (a.length < b.length){
      return a + b + a
    }else if (b.length > a.length){
      return a + b + a
    }else{
      return  b + a + b
  }
  }