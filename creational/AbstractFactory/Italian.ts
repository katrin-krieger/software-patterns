import {
  AbstractMealGenerator,
  Dish,
  Drink,
  Dessert,
} from "./AbstractMealGenerator";

class Pizza implements Dish {}
class Vino implements Drink {}
class Tiramisu implements Dessert {}

export class ItalianMealGenerator implements AbstractMealGenerator {
  createDish(): Dish {
    return new Pizza();
  }

  createDrink(): Drink {
    return new Vino();
  }

  createDessert(): Dessert {
    return new Tiramisu();
  }
}
