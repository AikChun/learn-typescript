import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('./football.csv');
csvFileReader.read();

console.log(csvFileReader.data[0][0]);

let manUnitedWins = 0;

for (let match of csvFileReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);