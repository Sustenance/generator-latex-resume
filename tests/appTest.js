'use strict';

const path = require("path");
const yeomanHelpers = require("yeoman-test");
const assert = require("yeoman-assert");

describe("LaTeX skeleton", () => {
	it("Should generate a skeleton LaTeX file", () => {
		return yeomanHelpers.run(path.join(__dirname, "../generators/app"))
			.withPrompts({
				name: "Sustenance",
				email: "sustenance@dev.test",
				phone: "555-555-5555",
				employer: "Test Company",
				jobTitle: "Tester",
				jobStartDate: "09/2017",
				jobEndDate: "",
				jobDescription: "Test generator-latex-resume",
				schoolName: "LaTeX University",
				schoolAward: "Certificate of Achievement",
				schoolDescription: "Learn how to test yeoman LaTeX generators",
				schoolStartDate: "01/2017",
				schoolEndDate: "",
				sampleProjectName: "generator-latex-resume",
				sampleProjectLocation: "https://github.com/Sustenance/generator-latex-resume",
				summaryOfQuals: "Can test this generator"
		}).then(() => {
			assert.file("resume_skeleton.tex");
		});
	});
});