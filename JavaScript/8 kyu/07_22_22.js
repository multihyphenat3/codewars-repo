function dontGiveMeThree(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/3/.test(i)) {
        count++
      }
    }
    return count
  }