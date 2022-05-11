function disemvowel(str) {
    let strArray = str.split('');
    let strFinal = [];
    for (let i = 0; i <= str.length; i++){
    if (str[i].toLowerCase() == 'a'||str[i].toLowerCase() == 'e'||str[i].toLowerCase() == 'i'||str[i].toLowerCase() == 'o'||str[i].toLowerCase() == 'u'){
    }else{
    strFinal.push(str[i])
    }
    return strFinal.join('')
  }
}