//BRGR BUTTON FOR MOBILE
const brgButton = document.querySelector(".brgr-menu")
const navOptions = document.querySelector('#nav-option')
const heightOptions = navOptions.children[0].offsetHeight * (navOptions.children.length) + ((navOptions.children.length + 1) * 15)
brgButton.addEventListener('click', (e) => {
  e.target.disabled = true
  brgButton.classList.toggle('show')
  navOptions.style.height = navOptions.offsetHeight <= 0 ? heightOptions + 'px' : '0px';
  setTimeout(() => {
    e.target.disabled = false
  }, 400);
})

// ACCORDION FOR COLLECTION
const accordionBtns = document.querySelectorAll('.accordion')
const accordionContents = document.querySelectorAll('.accordion-content')
accordionBtns.forEach(el => {
  el.addEventListener('click', () => {
    accordionContents.forEach(e => {
      if (e.dataset.acc === el.dataset.acc) {
        e.style.height = e.offsetHeight <= 0 ? e.children[0].offsetHeight + 'px' : '0px'
        e.parentElement.children[0].lastElementChild.classList.toggle('show')
      } else {
        e.style.height = '0px'
        e.parentElement.children[0].lastElementChild.classList.remove('show')
      }
    });
  })
})

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button.next',
    prevEl: '.swiper-button.prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});