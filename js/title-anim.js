
const length = 6;

const slideAnimPrev = () => {
  // Désactiver le boutton le temps de l'animation
  document.querySelector(`.button1`).disabled = true;
  setTimeout(function() {
    document.querySelector(`.button1`).disabled = false;
  }, 800);

  // Jeu de classes pour le slider
  for (i=0;i<=length-1;i++) {
  document.querySelector(`.box${i}`).classList.add('animaprev')
  }
  setTimeout(function() {
    for (i=0;i<=length-1;i++) {
      document.querySelector(`.box${i}`).classList.remove('animaprev')
    }
    const content = []
    for (i=0; i<length; i++) {
      content.push(document.querySelector(`.box${i}`).innerHTML)
    }
    for (i=0; i<length-1; i++) {
      document.querySelector(`.box${i}`).innerHTML = content[i+1]
    }
    document.querySelector(`.box${length-1}`).innerHTML = content[0]
  }, 780)
}

const slideAnimNext = () => {
  // Désactiver le boutton le temps de l'animation
  document.querySelector(`.button2`).disabled = true;
  setTimeout(function() {
    document.querySelector(`.button2`).disabled = false;
  }, 800);

  // Jeu de classes pour le slider
  for (i=0;i<=length-1;i++) {
  document.querySelector(`.box${i}`).classList.add('animanext')
  }
  setTimeout(function() {
    for (i=0;i<=length-1;i++) {
      document.querySelector(`.box${i}`).classList.remove('animanext')
    }
    const content = []
    for (i=0; i<length; i++) {
      content.push(document.querySelector(`.box${i}`).innerHTML)
    }
    for (i=1; i<length; i++) {
      document.querySelector(`.box${i}`).innerHTML = content[i-1]
    }
    document.querySelector(`.box0`).innerHTML = content[length-1]
  }, 780)
}






