const imgArray = [
    "./img/verde (1).jpg",
    "./img/wire (1).jpg"
  ]
  const img = document.getElementById("slide")
  let i=0
  const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.length - 1) ? i+1 : 0
  }
  
  const interval = () => {
    setInterval(slideShow, 1500)
  }
  
  interval();