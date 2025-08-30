const welcome = require("../modules/events/welcome");
const assert = require("assert");

describe("Welcome Event", () => {
  it("should be a function", () => {
    assert.strictEqual(typeof welcome, "function");
  });
});
