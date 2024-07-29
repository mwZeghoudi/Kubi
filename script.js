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
