"use strict";

// Load modules
const Code = require("code");
const Hapi = require("hapi");
const Lab = require("lab");

// Declare internals
const internals = {};

// Test shortcuts
const lab = (exports.lab = Lab.script());
const it = lab.it;
const expect = Code.expect;

it("returns a list of expect lifecycle events", async () => {
  const server = Hapi.server();
  await server.register(require("../"));

  server.route({
    method: "POST",
    path: "/",
    handler: function(request, h) {
      return "ok";
    },
    options: {}
  });

  const request = {
    method: "POST",
    url: "/"
  };
  const res = await server.inject(request);

  expect(res.result).to.equal("ok");
});
