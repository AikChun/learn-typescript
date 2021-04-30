"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("./utils");
var csvFileReader = new CsvFileReader_1.CsvFileReader('./football.csv');
csvFileReader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = csvFileReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
console.log("Date of 28/10/2020: " + utils_1.dateStringToDate('28/10/2020'));
