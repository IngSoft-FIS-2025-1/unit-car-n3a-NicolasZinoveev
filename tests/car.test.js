const Car = require("../src/car");

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
      car.decelerate(30);
      expect(car.speed).toBe(20);
    });

    test("should not decrease speed below zero", () => {
      car.speed = 10;
      car.decelerate(20);
      expect(car.speed).toBe(0);
    });

    test("should not accept a negative amount", () => {
      const negativeAmount = -20;
      expect(() => car.accelerate(negativeAmount)).toThrowError(
        "Amount should be a positive number.",
      );
    });
  });

  describe("getSpeed", () => {
    test("should return the current speed", () => {
      car.speed = 50;
      expect(car.getSpeed()).toBe(50);
    });
  });

  describe("stop", () => {
    test("should reset speed to 0", () => {
      car.stop();
      expect(car.speed).toBe(0);
    });
  });

  describe("calculateDistance", () => {
     test("should return correct distance based on speed and time", () => {
      const distance = car.calculateDistance(3);
      expect(distance).toBe(150);
    });
  });

  describe("isMoving", () => {
    test("should return false when speed is 0", () => {
      car.speed = 0;
      expect(car.isMoving()).toBe(false);
    });
  });

  describe("getDescription", () => {
   test("should return correct car description", () => {
      expect(car.getDescription()).toBe("2023 Toyota Corolla");
    });
  });
});
