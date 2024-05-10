const letters =["A","A","W","W","R","R","G","G","B","B","C","C","F","F","O","O","V","V","S","S","I","I","M","M","X","X","H","H","U","U"];
 var shuf_letters = letters.sort(() => (Math.random() > .5) ? 2 : -1);
 for (var i =0; i<letters.length; i++){
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuf_letters[i];
  document.querySelector('.game').appendChild(box);
  
  box.onclick = function() {
    this.classList.add('boxOpen');
    setTimeout(function() {
        let openedBoxes = document.querySelectorAll('.boxOpen');
        if (openedBoxes.length > 1) {
            if (openedBoxes[0].innerHTML === openedBoxes[1].innerHTML) {
                openedBoxes[0].classList.add('boxMatch');
                openedBoxes[1].classList.add('boxMatch');

                openedBoxes[0].classList.remove('boxOpen');
                openedBoxes[1].classList.remove('boxOpen');

                if (document.querySelectorAll('.boxMatch').length === letters.length) {
                    alert('You win!!!');
                }
            } else {
                openedBoxes[0].classList.remove('boxOpen');
                openedBoxes[1].classList.remove('boxOpen');
            }
        }
    }, 500);
};
}
