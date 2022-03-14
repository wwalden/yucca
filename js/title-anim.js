// Try something like that
// document.getElementById('yourElement').style.animation="spin2 4s linear infinite";

const arr = [`Raconter les histoires d’en haut.`, `Capturer des images dans des conditions difficiles.`, `Faire du cinéma là ou le cinema n’a pas sa place.`, `Être au plus proche de la vérité, de la réalité, votre réalité.`, `Ecrire, Réaliser, filmer pour raconter comment l’humain 
              repousse ses limites, s’exprime et interagit avec la nature.`, `Nous sommes Yucca Films`]

let num = 0

const changeSubtitle = () => {
  const subtitle = document.getElementById("topsection_cover_text");
  num === 5 ? num = 0 : num += 1
  subtitle.innerHTML = arr[num]
}


setInterval(changeSubtitle, 3000)





const slideAnimPrev = () => {
  for (i=1;i<=6;i++) {
  document.querySelector(`.box${i}`).classList.add('animaprev')
  }

  setTimeout(function() {
    for (i=1;i<=6;i++) {
      document.querySelector(`.box${i}`).classList.remove('animaprev')
    }}, 1200)
  
}




const slideAnimNext = () => {
  for (i=1;i<=6;i++) {
  document.querySelector(`.box${i}`).classList.add('animanext')
  }
  document.querySelector(`.box0`).classList.add('animaborn')

  setTimeout(function() {
    for (i=1;i<=6;i++) {
      document.querySelector(`.box${i}`).classList.remove('animanext')
    }
    document.querySelector(`.box0`).classList.remove('animaborn');
    
    const content0 =  document.querySelector(`.box0`).innerHTML
    const content1 =  document.querySelector(`.box1`).innerHTML
    const content2 =  document.querySelector(`.box2`).innerHTML
    const content3 =  document.querySelector(`.box3`).innerHTML
    const content4 =  document.querySelector(`.box4`).innerHTML
    const content5 =  document.querySelector(`.box5`).innerHTML
    const content6 =  document.querySelector(`.box6`).innerHTML

    document.querySelector(`.box1`).innerHTML = content0
    document.querySelector(`.box2`).innerHTML = content1
    document.querySelector(`.box3`).innerHTML = content2
    document.querySelector(`.box4`).innerHTML = content3
    document.querySelector(`.box5`).innerHTML = content4
    document.querySelector(`.box6`).innerHTML = content5
    document.querySelector(`.box0`).innerHTML = content6
  
  }, 1000)
    
}






