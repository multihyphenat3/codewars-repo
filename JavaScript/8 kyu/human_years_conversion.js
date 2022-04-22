// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]
var humanYearsCatYearsDogYears = function(humanYears) {
    return [humanYears, (15 + ((humanYears > 2) ? (9+(humanYears-2)*4) : humanYears == 2 ? 9 : 0)), (15 +((humanYears > 2) ? (9+(humanYears-2)*5) : humanYears == 2 ? 9 : 0))]
  }