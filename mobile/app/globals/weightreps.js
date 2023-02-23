const JNR = {
  setOne: ["12-8", "18-6","25-5"],
  setTwo: ["15-8", "18-6","20-5"],
  setThree: ["15-8", "18-6","20-5"],
  setFour: ["15-6", "18-6","20-5"],
  setFive: ["15-6", "18-6","20-5"],
  total: [68, 72, 80]
}

const MID = {
  setOne: ["25-8", "30-6","40-5"],
  setTwo: ["24-8", "38-6","44-5"],
  setThree: ["15-8", "18-6","20-5"],
  setFour: ["15-8", "18-6","20-5"],
  setFive: ["15-8", "18-6","20-5"],
  total: [69, 100, 120]
}

const SNR = {
  setOne: ["25-8", "30-6","40-5"],
  setTwo: ["24-8", "38-6","44-5"],
  setThree: ["15-8", "18-6","20-5"],
  setFour: ["15-8", "18-6","20-5"],
  setFive: ["15-8", "18-6","20-5"],
  total: [100, 200, 320]
}

const fomatSet = (set = JNR.setOne, level) => {
  console.log('set leve ', set, ' lvl ', level)
  const weight = set[level].split('-')
  return `${weight[0]}KG - ${weight[1]}REPS`
}

export default {JNR, MID, SNR}

export {JNR, MID, SNR, fomatSet}

