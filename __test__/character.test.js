import { TestScheduler } from "jest";
import Character from "./../src/character.js";

describe("Character", () => {
  
  test('should create a new character object with level, attributes, car type', () => {
    const charName = "Dave";
    const charClass = "mage";
    const charCar = "muscle";
    
    const newCharacter = new Character(charName, charClass, charCar);
    expect(newCharacter.charName).toEqual(charName);
    expect(newCharacter.charClass).toEqual(charClass);
    expect(newCharacter.charCar).toEqual(charCar);
  });
});