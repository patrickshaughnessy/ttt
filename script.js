(function app(){
  'use strict';

  let documentReady = () => {
    let lastMark;

    let finalX = '';
    let finalO = '';
    let winningStates = ['123', '456', '789', '147', '258', '369', '159', '357'];
    let endGame = false;

    $('.box').on('click.mark', (event) => {

      if (endGame){
        return;
      }

      let $e = $(event.target);

      if ($e.data("clicked")){
        return;
      }

      lastMark = (lastMark === "X") ? "O" : "X";

      let divId = $e[0].id;
      if (lastMark === "X") {
        finalX = finalX + divId;
      } else {
        finalO = finalO + divId;
      }

      $e.text(lastMark);

      $e.data("clicked", true);

      // console.log(finalX, finalO);

      // if (finalO.length === 5 || finalX.length === 5){
        //check X
        // finalX = finalX.split("").sort().join('');

        for (var i = 0, e =3; e <= finalX.length; i++, e++){
          var sliceOfThree = finalX.slice(i,e);
          winningStates.forEach(function(elem){
            if (sliceOfThree == elem) {
              let winMessageX = '<h1>X wins!</h1>';

              $('#winning').append(winMessageX);

              endGame = true;
              return;
            }
          });
        }

        //check O
        // finalO = finalO.split('').sort().join('');
        for (var i = 0, e = 3; e <= finalO.length; i++, e++){
          var sliceOfThree = finalO.slice(i,e);
          winningStates.forEach(function(elem){
            if (sliceOfThree == elem) {
              // console.log('O wins!');
              let winMessageO = '<h1>O wins!</h1>';

              $('#winning').append(winMessageO);

              endGame = true;
              return;
            }
          });
        }
      // }
      console.log(finalX, finalO)

    });
  }







  $(documentReady);

})();
