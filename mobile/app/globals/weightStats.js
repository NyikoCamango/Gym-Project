

const getWeightLevel = (weights, name) => {

  console.log(weights, ' - ', weight)
}

const getUserWeights = (weights) => {
  let names = weights.map(w => w.exercise)

  names = [...new Set(names)]

  const result = names.map(name => {
    let temp = weights.filter(w => w.exercise === name)
    return temp
  })

  return result
}


const getStatsMaxWeight = weight => {

  let max = weight.map(w => w.totalWeight)
  max = Math.max(...max)
  return max
}

const getDirection = weight => {

  weight.sort((a, b) =>  (a.day - b.day))

  let dir = weight[weight.length -1].totalWeight - weight[0].totalWeight
  console.log('weights ', weight[0].totalWeight ,' - - ', weight[weight.length -1].totalWeight)

  console.log(' ---- ', weight, '  dire ', dir)

  return {dir, beg: weight[0].totalWeight, last: weight[weight.length -1].totalWeight }

}

export { getUserWeights, getWeightLevel, getStatsMaxWeight, getDirection }