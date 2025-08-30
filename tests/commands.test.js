const ping = require("../modules/commands/ping");
const assert = require("assert");

describe("Ping Command", () => {
  it("should have config name 'ping'", () => {
    assert.strictEqual(ping.config.name, "ping");
  });
});
