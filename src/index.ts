import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reporttargets/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalisis';
import { Summary } from './Summary';
import { HtmlReport } from './reporttargets/HtmlReport';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport('report.html')
// );

// summary.buildAndPrintReport(matchReader.matches);

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summury = Summary.winsAnalysisWithHtmlReport(
  'Man United',
  'report1.html'
);
summury.buildAndPrintReport(matchReader.matches);
