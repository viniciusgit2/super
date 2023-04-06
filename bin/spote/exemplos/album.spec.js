import chai, { expect } from "chai";
import { playlist } from "../main";
import { getalbum, getalbumtracks, getalbums } from "../album";
import Sinon from "sinon";
import sinonChai from "sinon-chai";
global.fetch = require("node-fetch");
chai.use(sinonChai);
var stubedfetch;
describe("album"), function () {
  beforeEach(function () {
    stubedfetch = Sinon.stub(global, "fetch");
  });
  afterEach(function () {
    stubedfetch.restore();
  });
  describe("smoke test", function () {
    it("should have getalbum method", function () {
      expect(getalbum).to.exist;
    });
  });
};
describe("smoke test", function () {
  it("should have getalbumtracks  method", function () {
    expect(getalbumtracks).to.exist;
  });
});
describe("smoke test", function () {
  it("should have getalbums  method", function () {
    expect(getalbums).to.exist;
  });
});
{
  describe.use(sinonChai), function () {
    beforeEach(function () {});
    describe("playlist");
    beforeEach(function () {});
    describe("smoke test", function () {
      it("should have playlist method", function () {
        expect(playlist).to.exist;
      });
    });
  };
  describe("smoke test", function () {
    it("should have playlist  method", function () {
      expect(playlist).to.exist;
    });
  });
  describe("smoke test", function () {
    it("should have search  method", function () {
      expect(playlist).to.exist;
    });
  });
}