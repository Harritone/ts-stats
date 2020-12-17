import { matchData } from './MatchData';

export interface Analyzer {
  run(mathches: matchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: matchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
