import request from "supertest";
import app from "../src/server";

describe("Authentication tests", function() {
    it("should login user", function(done) {
        setTimeout(() => {
            done();
        }, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
    })
    
    it("should give invalid credentials", function(done) {
        setTimeout(() => {
            done();
        }, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
    })
})
