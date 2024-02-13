export interface AbstractMealGenerator {
  createDish(): Dish;
  createDrink(): Drink;
  createDessert(): Dessert;
}

export interface Dish {}

export interface Drink {}

export abstract class Dessert {}
