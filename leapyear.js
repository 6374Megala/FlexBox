function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  const year = 2000;
  const result = isLeapYear(year);

  if (result) {
    console.log(`${year} is a Leap Year.`);
    console.log();
  } else {
    console.log(`${year} is not a Leap Year.`);
  }