// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
    let findNeedle = [1, 2, 'needle', 4]
    return "found the needle at position "  + haystack.indexOf('needle')
  }