function isBetweenMarch20AndJune20(day, month) {
    if (month >= 3 && month <= 6) {
     
      if (month === 3) {
        return day >= 20;
      }
      
      if (month === 6) {
        return day <= 20;
      }  
      return true;
    }
   
    return false;
  }
  
  const day = parseInt(process.argv[2], 10);
  const month = parseInt(process.argv[3], 10);
  const result = isBetweenMarch20AndJune20(day, month);
  console.log(result);