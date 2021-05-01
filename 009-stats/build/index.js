"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWinsAnalyzer = new WinsAnalyzer_1.WinsAnalyzer('Man United');
var summary = new Summary_1.Summary(manUnitedWinsAnalyzer, new ConsoleReport_1.ConsoleReport());
var htmlSummary = new Summary_1.Summary(manUnitedWinsAnalyzer, new HtmlReport_1.HtmlReport());
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
