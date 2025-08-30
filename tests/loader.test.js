const loader = require("../core/loader");
const assert = require("assert");

describe("Loader Tests", () => {
  it("should load commands without error", () => {
    const api = {};
    assert.doesNotThrow(() => loader.loadCommands(api));
  });

  it("should load events without error", () => {
    const api = {};
    assert.doesNotThrow(() => loader.loadEvents(api));
  });
});
