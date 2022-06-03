function sumStr(a,b) {
    if (a === '' || b === '')
      return "" + a + b || parseInt(0) + ''
    else if (a || b ){
      return (parseInt(a) + parseInt(b) + '')
    }
  }