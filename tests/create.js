var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;

describe("test blog create endpoint", function() {
  describe("POST /post/create", function() {
    it("should have content-type text/html", function(done) {
      supertest(app)
        .post("/post/create")
        .set("User-Agent", "API testing")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200)
        .end(done);
    });
    it("should have a form!", function(done) {
      supertest(app)
        .post("/post/create")
        .set("User-Agent", "API testing")
        .expect(function(res) {
          console.log(res.text);
          assert(res.text.search("<form.*>.*</form>") != -1);
        })
        .expect(200)
        .end(done);
    });
    it("should have a button!", function(done) {
      supertest(app)
        .post("/post/create")
        .set("User-Agent", "API testing")
        .expect(function(res) {
          console.log(res.text);
          assert(res.text.search("<button.*>.*</button>") != -1);
        })
        .expect(200)
        .end(done);
    });
  })
})
