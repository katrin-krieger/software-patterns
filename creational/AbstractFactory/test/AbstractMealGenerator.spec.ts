import { expect, test } from "@jest/globals";

import { ItalianMealGenerator } from "../Italian";
import { AbstractMealGenerator } from "../AbstractMealGenerator";

const italianMenu: AbstractMealGenerator = new ItalianMealGenerator();

test("creates a meal with a main dish, drink and a dessert", () => {
  expect(italianMenu.createDish()).toBeDefined;
  expect(italianMenu.createDessert()).toBeDefined;
  expect(italianMenu.createDrink()).toBeDefined;
});

test("creates only Italian dishes", () => {
  expect(italianMenu.createDish().constructor.name).toBe("Pizza");
  expect(italianMenu.createDessert().constructor.name).toBe("Tiramisu");
  expect(italianMenu.createDrink().constructor.name).toBe("Vino");
  expect(italianMenu.createDish().constructor.name).not.toBe("Hamburger");
  expect(italianMenu.createDessert().constructor.name).not.toBe("Apfelstrudel");
  expect(italianMenu.createDrink().constructor.name).not.toBe("Beer");
  expect(italianMenu.createDish().constructor.name).not.toBe("Sushi");
});
