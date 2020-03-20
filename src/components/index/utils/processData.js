import data from 'Data/data.json';

export function processData() {
  let dataToUse = [];
  data.forEach(d => {
    if (+d.total > 100000 && d.annual_median_wage < 160000){
      let bin = Math.floor(d.proximityScore / 25);
      dataToUse.push({
        job: d.occupationTitle,
        population: +d.total,
        income: +d.annual_median_wage,
        id: d.soc,
        proximity: +d.proximityScore,
        bin: d.annual_median_wage < 60000 && d.proximityScore > 65 ? 3 : 1,
        annotate: ['Registered Nurses', 'Lawyers', 'Waiters and Waitresses', 'Elementary School Teachers, Except Special Education'].includes(d.occupationTitle),
      })
    }
  })


  console.log(dataToUse);
  return dataToUse;
}
