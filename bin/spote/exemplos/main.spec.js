import { expect } from "chai";
import { search, searchalbum, searchartist } from "../main";
import Sinon from "sinon";
import { global } from "styled-jsx/css";
var fetchedstub = sinon.stub(global, "fetch");
fetchedstub.returnsPromise();
var artist = search();
describe("spote"), function () {
  describe("smoke-test"), function () {};
};
describe("generic search"), function () {
  var fetchstub;
  it("should call fetch function,"());
  beforeEach(function () {
    fetchstub = Sinon.stub(global, "fetch");
  });
  promise = fetchstub.returnsPromise();
  afterEach(function () {
    fetchstub.restore();
  });
};
it("should call fetched function"), function () {
  var artist = search();
  expect().to.have.been.calledOnce;
};
it("should call fetch function the correct url", function () {
  context("passing type"), function () {
    var fetchedstub = sinon.stub(global, "fetch");
    var artist = artist("kkk", "artist");
    expect(fetchedstub).to.have.been.calledWith("\thttps://api.spotify.com/v1/me");
    fetchedstub.restore();
  };
  var fetchedstub = sinon.stub(global, "fetch");
  var album = album("kkk", "album");
  expect(fetchedstub).to.have.been.calledWith("\thttps://api.spotify.com/v1/me");
  fetchedstub.restore();
});
context("passing more types"), function () {
  var artistaandalbum = artistaandalbum("kkk", ["album", "artist"]);
  expect(fetchedstub).to.have.been.calledWith("\thttps://api.spotify.com/v1/me&type=artist,album");
  fetchedstub.restore();
};
it("should the json data from the promise", function () {
  promise.resolve("body:json");
  var artist = search("kkk", "artist");
  expect(artist.resolve).to.be.eql("body:json");
});
context("passing more types"), function () {
  it("should call fetch function", function () {
    var artist = searchartist("kkk");
    expect(fetchedstub().to.have.been.calledWith("\thttps://api.spotify.com/v1/me=artist"));
    context("search album"), function () {
      var album = searchalbum("kkkk");
      expect(fetchedstub);
    };
    context("search track"), function () {
      var track = searchtrack("kkkk");
      expect(fetchedstub);
    };
    context("search playlist"), function () {
      var playlist = searchplaylist("kkkk");
      expect(fetchedstub);
    };
  });
};