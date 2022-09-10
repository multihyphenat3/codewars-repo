function well(x){
    switch(x.filter(item => item == 'good').length) {
      case 0:
        return 'Fail!'; break;
      case 1:
      case 2:
        return 'Publish!'; break;
      default:
        return 'I smell a series!'; break;
    }
  }