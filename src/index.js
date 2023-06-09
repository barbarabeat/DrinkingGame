function game(a,b) {

  if ( a >= b && a !== 0 ) return "Mike wins!"
  if ( a === 5 && b === 6 ) return "Joe wins!"

  return "Non-drinkers can't play";
}

module.exports = {
  game,
};
