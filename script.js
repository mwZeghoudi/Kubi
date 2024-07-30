//BRGR BUTTON FOR MOBILE
const brgButton = document.querySelector(".brgr-menu")
const navOptions = document.querySelector('#nav-option')
const heightOptions = navOptions.children[0].offsetHeight * (navOptions.children.length) + ((navOptions.children.length + 1) * 15) 
brgButton.addEventListener('click', () => {
  brgButton.classList.toggle('show')
  navOptions.style.height = navOptions.offsetHeight <= 0 ? heightOptions + 'px' : '0px';
})

// ACCORDION FOR COLLECTION
const accordionBtns = document.querySelectorAll('.accordion')
const accordionContents = document.querySelectorAll('.accordion-content')
accordionBtns.forEach(el => {
  el.addEventListener('click', () => {
    accordionContents.forEach(e => {
      if (e.dataset.acc === el.dataset.acc) {
        e.classList.toggle('show')
        e.parentElement.children[0].lastElementChild.classList.toggle('show')
      } else {
        e.classList.remove('show')
        e.parentElement.children[0].lastElementChild.classList.remove('show')
      }
    });
  })
})

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});