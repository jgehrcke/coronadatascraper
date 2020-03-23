import defaultScraperDEU, { sharedSchema } from '../_shared.js';

const scraper = {
  ...sharedSchema,
  country: 'DEU',
  state: 'DE-SN', // ISO 3166 notation
  scraper: defaultScraperDEU,
  _rowToResult: row => {
    return {
      cases: parseInt(row['DE-SN_cases'], 10),
      deaths: parseInt(row['DE-SN_deaths'], 10),
      coordinates: [13.201, 51.104],
      population: 4.08 * 10 ** 6
    };
  }
};

export default scraper;
