const { test, expect } = require("@jest/globals");
const {
  returnTwo,
  greeting,
  add,
  mulitply,
  divide,
  subtract,
} = require("./functions");

test("Should return the number 2", () => {
  expect(returnTwo()).toEqual(2);
});

test("Should return Hello {name}", () => {
  expect(greeting("James")).toEqual("Hello, James");
  expect(greeting("Jill")).toEqual("Hello, Jill");
});

test("Should return the sum of two numbers", () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(5, 9)).toEqual(14);
});

describe("Math Functions", () => {
  test("Should return the product of two numbers", () => {
    expect(mulitply(1, 2)).toEqual(2);
    expect(mulitply(2, 4)).toEqual(8);
  });

  test("Should return the quotant of two numbers", () => {
    expect(divide(10, 5)).toEqual(2);
    expect(divide(21, 3)).toEqual(7);
  });

  test("Should return the remainder of two numbers", () => {
    expect(subtract(10, 8)).toEqual(2);
    expect(subtract(15, 5)).toEqual(10);
  });
});
