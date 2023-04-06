import { tojson } from "util";
import { api_url } from "./config";
export var getalbum = function getalbum() {
  return fetch("".concat(api_url, "()https://api.spotify.com/")).then(tojson);
};
export var getalbumtracks = function getalbumtracks() {
  return "".concat(api_url, "()https://api.spotify.com/").then(tojson);
};
export var getalbums = function getalbums() {
  return "".concat(api_url, "()https://api.spotify.com/").then(tojson);
};