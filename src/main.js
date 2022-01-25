// GO TO UP 
const scrollUp = document.querySelector('.scroll-up')
const navBar = document.querySelector('nav')

window.onscroll = function () {
  this.scrollY > 80 ? scrollUp.classList.add('showUp') : scrollUp.classList.remove('showUp')
  this.scrollY > 0 ? navBar.classList.add('scrollNav') : navBar.classList.remove('scrollNav')
}

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


// RESPONSIVE SideBar 

const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
console.log(closeBtn)
const sideBar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click',()=>{
  sideBar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click',()=>{
  sideBar.classList.toggle('show-sidebar')
})