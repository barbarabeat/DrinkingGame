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

  test("If A is 5 and B is 6, Joe wins", () => {
    const a = 5;
    const b = 6;

    expect(game(a,b)).toBe("Joe wins!");
  }); 
  
  test("If A is bigger, Mike wins;", () => {
    const a = 15;
    const b = 13;

    expect(game(a,b)).toBe("Mike wins!");
  });   
  })
