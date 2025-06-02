import Car from "../src/car";
import { expect, test, describe, beforeEach } from "@jest/globals";

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

let car;

describe("Car", () => {
  beforeEach(() => {
    car = new Car("Toyota", "Corolla", 2023, 180);
    car.speed = 50;
  });

  describe("accelerate", () => {
    test("should increase speed by the specified amount", () => {
      car.accelerate(20);
      expect(car.speed).toBe(70);
    });

    test("should not increase speed beyond the maximum speed limit", () => {
      car.speed = 90;
      expect(() => car.accelerate(100)).toThrowError(
        "Speed limit has been reached.",
      );
    });

    test("should not accept negative amount", () => {
      const negativeAmount = -20;
      expect(() => car.accelerate(negativeAmount)).toThrowError(
        "Amount should be a positive number.",
      );
    });
  });

  describe("decelerate", () => {
    test("should decrease speed by the specified amount", () => {
      //TODO
    });

    test("should not decrease speed below zero", () => {
      //TODO
    });

    test("should not accept a negative amount", () => {
      //TODO
    });
  });

  describe("getSpeed", () => {
    //TODO
  });

  describe("stop", () => {
    //TODO
  });

  describe("calculateDistance", () => {
    //TODO
  });

  describe("isMoving", () => {
    //TODO
  });

  describe("getDescription", () => {
    //TODO
  });
});
