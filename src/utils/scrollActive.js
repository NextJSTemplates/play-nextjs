export function onScroll(event) {
  if (typeof window === 'undefined') {
    return
  }
  
  const sections = document.querySelectorAll('.ud-menu-scroll')
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i]
    const val = currLink.getAttribute('href')
    const refElement = val && document.querySelector(val)
    const scrollTopMinus = scrollPos + 73
    if (
      refElement &&
      refElement.offsetTop <= scrollTopMinus &&
      refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
      document.querySelector('.ud-menu-scroll').classList.remove('active')
      currLink.classList.add('active')
    } else {
      currLink.classList.remove('active')
    }
  }
}
