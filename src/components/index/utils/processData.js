import data from 'Data/data.json';
import { sum } from 'd3';

export function processData() {
  let dataToUse = [];
  data.forEach(d => {
    if (+d.total > 100000 && d.annual_median_wage < 160000 ){
      let bin = Math.floor(d.proximityScore / 25);
      dataToUse.push({
        job: d.occupationTitle,
        population: +d.total,
        income: +d.annual_median_wage,
        id: d.soc,
        proximity: +d.proximityScore,
        bin: d.annual_median_wage < 60000 && d.proximityScore >= 75 ? 3 : 1,
        annotate: ['Registered Nurses', 'Lawyers', 'Waiters and Waitresses', 'Elementary School Teachers, Except Special Education'].includes(d.occupationTitle),
      })
    }
  })


  console.log(dataToUse);

  const danger = data.filter(a => a.annual_median_wage < 60000 && a.proximityScore >= 75);
  console.log('danger', sum(danger.map(a => a.total)));
  console.log('total', sum(data.map(a => a.total)));

  return dataToUse;
}
