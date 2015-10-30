(function app(){
  'use strict';

  let documentReady = () => {
    let lastMark;

    $('.box').on('click.mark', (event) => {

      let $e = $(event.target);

      if ($e.data("clicked")){
        return;
      }

      lastMark = (lastMark === "X") ? "O" : "X";

      $e.text(lastMark);

      $e.data("clicked", true);

    });
  }

  $(documentReady);

})();
