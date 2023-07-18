const sumArrayNumbers = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((accum, curr) => accum + curr, 0)
}

module.exports = sumArrayNumbers
