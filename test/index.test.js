const { game } = require("../src/index");

describe('Drinking Game tests', () => {
  test("If Mike and Joe don't drink, it should be Non-drinkers can't play", () => {
  
    expect(game(0,0)).toBe("Non-drinkers can't play");
  });

  test("If the quantity (A and B) is equal, Mike wins", () => {
    const a = 1;
    const b = 1;

    expect(game(a,b)).toBe("Mike wins!");
  }); 
  
  test("If A is 4 and B is 3, Mike wins", () => {
    const a = 4;
    const b = 3;

    expect(game(a,b)).toBe("Mike wins!");
  });   
  })
