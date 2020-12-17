"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalisis_1 = require("./Analyzers/WinsAnalisis");
var HtmlReport_1 = require("./reporttargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team, fileName) {
        return new Summary(new WinsAnalisis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport(fileName));
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
