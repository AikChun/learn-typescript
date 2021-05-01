import fs from 'fs';
import { MatchReader } from './MatchReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { Console } from 'node:console';

const csvFileReader = new CsvFileReader('./football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalyzer('Man United'),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

// console.log(matchReader.matches);

// let manUnitedWins = 0;

// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);
