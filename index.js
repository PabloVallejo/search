const fetch = require("node-fetch");
const searches = [
  '"3M COMPANY" after:2014-01-01 before:2014-12-31',
  '"A. O. SMITH CORPORATION" after:2014-01-01 before:2014-12-31',
  '"ABBOTT LABORATORIES" after:2014-01-01 before:2014-12-31',
  '"ABBVIE INC" after:2014-01-01 before:2014-12-31',
  '"Abcam PLC" after:2014-01-01 before:2014-12-31',
  '"ABIOMED" after:2014-01-01 before:2014-12-31',
  '"ACCENTURE PUBLIC LIMITED COMPANY" after:2014-01-01 before:2014-12-31',
  '"ACTIVISION BLIZZARD" after:2014-01-01 before:2014-12-31',
  '"ADELAIDE BRIGHTON" after:2014-01-01 before:2014-12-31',
];

const siteQuery = 'site:https://www.wsj.com/';
const baseUrl = 'https://www.googleapis.com/customsearch/v1';
const apiKey = 'AIzaSyATK332U7XG2OC5fnTPMPUxEOQHebUtFYM';
const searchEngineKey = '015870102158550649563:pkjyfleihde';

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

let currentIndex = 0;
setInterval(async () => {
  if (currentIndex < searches.length) {
    const query = encodeURIComponent(`${siteQuery} ${searches[currentIndex]}`);
    const url = `${baseUrl}?key=${apiKey}&cx=${searchEngineKey}&q=${query}`;
    const json = await getData(url);
    console.log(`${json.searchInformation.totalResults} ${searches[currentIndex]}`);
  }

  currentIndex = currentIndex + 1;
}, 1000);