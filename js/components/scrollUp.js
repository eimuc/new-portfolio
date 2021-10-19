function scrollUp() {
  const scroll = () => {
    const scrollUp = document.getElementById('scroll-up');

    scrollY >= 560 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
  };
  window.addEventListener('scroll', scroll);
}

export default scrollUp;
