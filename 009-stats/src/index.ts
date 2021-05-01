import fs from 'fs';
import { MatchReader } from './MatchReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { HtmlReport } from './reportTargets/HtmlReport';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('./football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWinsAnalyzer = new WinsAnalyzer('Man United');

const summary = new Summary(manUnitedWinsAnalyzer, new ConsoleReport());

const htmlSummary = new Summary(manUnitedWinsAnalyzer, new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);

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
