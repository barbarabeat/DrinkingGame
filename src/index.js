function game(a,b) {
  if ( a >= b && a !== 0 ) return "Mike wins!"

  if ( a < b ) return "Joe wins!"

  return "Non-drinkers can't play";
}

module.exports = {
  game,
};
