const $ = (selector) => {
  return document.querySelector(`${selector}`)
}

let $menu = $('.menu');
let $menuBtn = $('.menu-btn');

$menuBtn.addEventListener('click', () => {
  $menu.classList.toggle('is-active')

  const $hamburgerToggle = $menuBtn.getElementsByTagName('svg').item(0)
  const $hamburgerToggleOpen = $menuBtn.getElementsByTagName('svg').item(1)

  $hamburgerToggle.classList.toggle('none')
  $hamburgerToggleOpen.classList.toggle('none')
})
