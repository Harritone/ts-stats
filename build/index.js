"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport('report.html')
// );
// summary.buildAndPrintReport(matchReader.matches);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summury = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United', 'report1.html');
summury.buildAndPrintReport(matchReader.matches);
