import {
  AbstractMealGenerator,
  Dish,
  Drink,
  Dessert,
} from "./AbstractMealGenerator";

class Beer implements Drink {}
class ApfelStrudel implements Dessert {}
class PorkRoast implements Dish {}

export class GermanMealGenerator implements AbstractMealGenerator {
  createDish(): Dish {
    return new PorkRoast();
  }

  createDrink(): Drink {
    return new Beer();
  }

  createDessert(): Dessert {
    return new ApfelStrudel();
  }
}
