import { AbstractMealGenerator } from "./AbstractMealGenerator";
import { AmericanMealGenerator } from "./American";
import { GermanMealGenerator } from "./German";
import { ItalianMealGenerator } from "./Italian";

var italianMenu: AbstractMealGenerator = new ItalianMealGenerator();
var germanMenu: AbstractMealGenerator = new GermanMealGenerator();
var americanMenu: AbstractMealGenerator = new AmericanMealGenerator();

var italianDish = italianMenu.createDish();
console.log(italianDish);
