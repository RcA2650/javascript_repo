//Find diseases spreading in Covid-19 zones
const findOtherDiseases  = (locations) => {
    const locationsWithCovid = locations.filter(location => {
      return ((location.diseases).includes('COVID-19'))
    });
    const diseases = [];
    locationsWithCovid.map(location => diseases.push(...location.diseases));
    const diseasesSet = new Set(diseases);
    diseasesSet.delete('COVID-19');
    return [...diseasesSet];
  
  }