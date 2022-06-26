function xor(a, b) {
    var a = true
    var b = false
  if (a == b || b == a){
    return true
  }else if(a == a || b == b){
    return false
  }else{
    return !true
  }
}