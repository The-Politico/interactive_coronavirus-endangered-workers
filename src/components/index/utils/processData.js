import data from 'Data/data.json';
import { sum } from 'd3';

const incomeCutoff = 35000;
const proximityCutoff = 75;


function determineBin(value) {
  const [proximity, income] = value;
  if (income <= 48000) {
    if (income <= 35000 ) {
      if (proximity >= 50) {
        if (proximity >= 75 ) {
          return 3
        }
        return 2
      }
      return 1
    }

    if (proximity >= 50) {
      return 2
    }
    return 1
  }
  return 1
}

export function processData() {
  let dataToUse = [];
  data.forEach(d => {
    if (+d.annual_median_wage < 102000 ){
      let bin = Math.floor(d.proximityScore / 25);
      dataToUse.push({
        job: d.occupationTitle,
        population: +d.total,
        income: +d.annual_median_wage,
        id: d.soc,
        proximity: +d.proximityScore,
        bin: determineBin([d.proximityScore, d.annual_median_wage]),
        annotate: [
          'Registered Nurses',
          'Lawyers',
          'Cashiers',
          'Elementary School Teachers, Except Special Education',
          'Personal Care Aides',
          'Heavy and Tractor-Trailer Truck Drivers',
          'Retail Salespersons'
        ].includes(d.occupationTitle),
        hideAnnotatedMobile: [
          'Retail Salespersons',
          'Personal Care Aides',
        ].includes(d.occupationTitle),
      })
    }
  })

  const danger = data.filter(a => a.annual_median_wage <= incomeCutoff && a.proximityScore >= proximityCutoff);
  console.log('danger', sum(danger.map(a => a.total)));
  console.log('total', sum(data.map(a => a.total)));
  console.log(`length of dataset: ${dataToUse.length}`);
  return dataToUse;
}
