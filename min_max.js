function generateRandomValue() {
    return Math.floor(Math.random() * 10);
    
  }
  
  function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  const randomValues = [];
for (let i = 0; i < 5; i++) {
  randomValues.push(generateRandomValue());
}
  
  const result = findMinMax(randomValues);
  console.log('Generated Values:', randomValues);
  console.log('Minimum Value:', result.min);
  console.log('Maximum Value:', result.max);