import { matchData } from './MatchData';
import { WinsAnalysis } from './Analyzers/WinsAnalisis';
import { HtmlReport } from './reporttargets/HtmlReport';

export interface Analyzer {
  run(mathches: matchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, fileName: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(fileName));
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: matchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
