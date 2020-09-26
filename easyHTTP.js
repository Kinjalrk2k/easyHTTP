function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// GET request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText); //  first parameter is the error
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// POST request

// PUT request

// DELETE request
