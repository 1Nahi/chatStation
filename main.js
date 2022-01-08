document.getElementById('closebtn').addEventListener('click',() => {
  var nav = document.getElementById('navbar')
  nav.style.width = '0'
  var ul = document.getElementById('ul')
  ul.style.display = 'none'
  var btn = document.getElementById('opnbtn')
  btn.style.display = 'block'
})
document.getElementById('opnbtn').addEventListener('click',() => {
  var nav = document.getElementById('navbar')
  nav.style.width = '100%'
  var ul = document.getElementById('ul')
  ul.style.display = 'block'
  var btn = document.getElementById('opnbtn')
  btn.style.display = 'none'
})
const tri = document.getElementById('tri')
window.addEventListener('scroll', () => {
  let off = window.pageYOffset
  tri.style.backgroundPositionY = off * 0.7 + 'px'
})