Drinking Game

Mike and Joe are fratboys that love beer and games that involve drinking. They play the following game: Mike chugs one beer, then Joe chugs 2 beers, then Mike chugs 3 beers, then Joe chugs 4 beers, and so on. Once someone can't drink what he is supposed to drink, he loses.

Mike can chug at most A beers in total (otherwise he would pass out), while Joe can chug at most B beers in total. Who will win the game?

Write the function game(A,B) that returns the winner, "Mike" or "Joe" accordingly, for any given integer values of A and B.

Note: If either Mike or Joe cannot drink at least 1 beer, return the string "Non-drinkers can't play".

Before Session 🍅:
    - Escolher a linguagem : JS ✅
    - Criar as pastas e ajustar nodes,readme e package. ✅

    -----

    - Inicalmente implementamos os métodos (no ambiente de test), falha se e, então, faz a implementação na função para aquele teste passar. Caminah se assim até tudo estar coberto. É bom planejar antes de colocar a "mão na massa"
    - Ao finalizar, levar do index.js para o site
    -----

Domain:

- The problem doesn't describe who begins always. So, because of the example, it will be Mike;
- Each time, the beer increases 1. It means, 1,2,3,4...;
- If no one drinks, the result is "Non-drinkers can't play";
- The function receives how many each player drunk;
- Else, the result is who winner the game.

Tests:
    - 1. If Mike and Joe don't drink, it should be "Non-drinkers can't play";
    - 2. If the quantity (A and B) is equal, Mike wins;
    - 3. If A is 4 and B is 3, Mike wins;
    - 4. If A is 5 and B is 6, Joe wins;
    - 5. If A is bigger, Mike wins;
    - 6. If B is bigger, Joe wins;
    ✅

Session 1 🍅:
Domain and tests written;

Session 2 🍅:


