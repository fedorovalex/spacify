import "spacify";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Spacify function", function () {

	it("should be defined for each String object", function () {
		expect("foo".spacify).to.be.a("function");
	});

	it("should insert spaces between chars", function () {
		expect("Hello, World!".spacify()).to.be.equal("H e l l o ,   W o r l d !");
	});

	it("should leave empty strings untouched", function () {
		expect("".spacify()).to.be.equal("");
	});

	it("should leave one-char strings untouched", function () {
		expect("a".spacify()).to.be.equal("a");
	});

	// Low-level requirement (remove "skip" to enable requirement)
	it("should be implemented by means of \"join\" function", function () {
		expect("foo".spacify.toString()).to.contain(".join(");
	});
});
