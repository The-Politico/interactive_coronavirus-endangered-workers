import data from 'Data/data.json';

export function processData() {
  let dataToUse = [];
  data.forEach(d => {
    if (+d.total > 100000){
      let bin = Math.floor(d.proximityScore / 25);
      dataToUse.push({
        job: d.occupationTitle,
        population: +d.total,
        income: +d.annual_median_wage,
        id: d.soc,
        proximity: +d.proximityScore,
        bin: bin > 3 ? 3 : bin,
      })
    }
  })


  console.log(dataToUse);
  return dataToUse;
}
