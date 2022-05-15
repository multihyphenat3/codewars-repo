function areYouPlayingBanjo(name) { 
    let result = name.toUpperCase().startsWith('R')
    ? 'plays'
    : 'does not play'
    
    return `${name} ${result} banjo`
  }