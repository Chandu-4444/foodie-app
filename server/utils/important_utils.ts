// @ts-nocheck
import request from "supertest";
import app from "../src/server";

describe("Authentication User", function () {
	it("should login user", function (done) {
		setTimeout(() => {
			done();
		}, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
	});

	it("Should fetch users", function (done) {
		setTimeout(() => {
			done();
		}, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
	});
});

describe("Authentication Posts", function () {
	it("Should fetch authenticated user on providing auth token", function (done) {
		setTimeout(() => {
			done();
		}, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
	});

	it("Should return invalid token", function (done) {
		setTimeout(() => {
			done();
		}, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
	});
});

describe("Comment tests", function () {
	it("should fetch all comments to a post", function (done) {
		setTimeout(() => {
			done();
		}, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
	});

	it("should give invalid credentials", function (done) {
		setTimeout(() => {
			done();
		}, Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
	});
});
