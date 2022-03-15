
const length = 5;

const slideAnimPrev = () => {
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
  }, 1000)
}

const slideAnimNext = () => {
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
  }, 1000)
}






