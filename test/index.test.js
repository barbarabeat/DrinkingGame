const { game } = require("../src/index");

describe('Drinking Game tests', () => {
  test("If Mike and Joe don't drink, it should be Non-drinkers can't play", () => {
  
    expect(game(0,0)).toBe("Non-drinkers can't play");
  });
  })
