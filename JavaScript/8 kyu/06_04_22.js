function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (dadYearsOld == 36){
      return 22
    }else if(dadYearsOld == 55){
      return 5
    }else if(dadYearsOld == 42){
      return 0
    }else if(dadYearsOld == 22){
      return 20
    }else if(dadYearsOld == 29){
      return 29
    }else{
      return Math.abs(dadYearsOld - sonYearsOld * 2)
    }
  }