import {
  AbstractMealGenerator,
  Dish,
  Drink,
  Dessert,
} from "./AbstractMealGenerator";

class Hamburger implements Dish {}
class Coke implements Drink {}
class IceCream implements Dessert {}

export class AmericanMealGenerator implements AbstractMealGenerator {
  createDish(): Dish {
    return new Hamburger();
  }

  createDrink(): Drink {
    return new Coke();
  }

  createDessert(): Dessert {
    return new IceCream();
  }
}
