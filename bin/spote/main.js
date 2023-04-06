export var search = function search(query, type) {
  return fetch("https://api.spotify.com/".concat(query, "&").concat(type)).then(function (data) {
    return data.json();
  });
};
export var playlist = function playlist(query, type) {
  return fetch("https://api.spotify.com/".concat(query, "&").concat(type)).then(function (data) {
    return data.json();
  });
};