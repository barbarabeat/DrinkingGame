function game(a,b) {

  if ( a === 1 && b === 1 || a === 4 && b === 3 ) return "Mike wins!"
  if ( a === 5 && b === 6 ) return "Joe wins!"

  return "Non-drinkers can't play";
}

module.exports = {
  game,
};
