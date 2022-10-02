import { TestScheduler } from "jest";
import Character from "./../src/character.js";

describe("Character", () => {
  test('should create a new character object with level, attributes, car type', () => {
    const charName = "Dave";
    const charCar = "electric";
    
    const newCharacter = new Character(charName,charCar);
    expect(newCharacter.charName).toEqual(charName);
    expect(newCharacter.charCar).toEqual(charCar);
  });

  test('should set attributes for horsepower,torque,nos based on car class and type', ()=> {
    const charName = "Dave";
    const charCar = "electric";
    
    const newCharacter = new Character(charName, charCar);
    newCharacter.setAttributes();
    expect(newCharacter.horsePower).toEqual(100);
    expect(newCharacter.torque).toEqual(800);
    expect(newCharacter.nos).toEqual(0);
    expect(newCharacter.playerLvl).toEqual(1);
  })
});